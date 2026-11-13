# 04 · User flows

_2026-11-13 · Status: current. Diagrams are Mermaid (GitHub renders them)._

## 1. App map

```mermaid
flowchart LR
  W[Welcome] --> OB[Onboarding] --> PL[Placement] --> G[Goal] --> L1[First lesson] --> T
  W -- I have an account --> ACC[/account/]
  W -- I have a backup --> IMP[Import]
  subgraph Tabs
    T[Today] --- P[Path] --- M[Me]
  end
  T -- Start --> LES[Lesson] --> RES[Results] --> T
  P -- Practise this unit --> LES
  M --> S[Settings]
  S --> TUT[AI tutor]
  S --> ACC
  S --> DATA[Export / Import / Reset]
  M --> WORDS[My words]
```

## 2. First run (CUJ-1, CUJ-2)

```mermaid
flowchart TD
  A[Open app] --> B{Saved progress<br/>on device?}
  B -- yes --> T[Today]
  B -- no --> W[Welcome]
  W -- accounts on: Sign in --> SI[Sign in, then download progress or onboard]
  W -- Try it first / Get started --> L[App language es/en]
  L --> C[Which languages? it / de]
  C --> E[Per language: explain in, experience, 3 can-dos]
  E --> X{Experience = never?}
  X -- yes --> U1[Start at Unit 1]
  X -- no --> P[Placement: 8–15 adaptive items]
  P --> R[Result: band + start unit<br/>Start lower / higher]
  U1 --> G[Goal + live minutes/day card]
  R --> G
  G --> AN[When will you practise?]
  AN --> S[First 5-min session] --> RES[Results] --> T
```

## 3. Daily practice: one session (CUJ-3, CUJ-5)

```mermaid
flowchart TD
  T[Today: ring + one Start button] --> B[Build chunk]
  B --> B1[Due reviews, oldest first ≤15]
  B --> B2[New items in unit order: guess → recall 3–6 tasks later]
  B --> B3{Away ≥ 7 days?}
  B3 -- yes --> B4[Reviews only: warm-up]
  B1 & B2 & B4 --> Q[Task]
  Q --> A[Answer] --> CK[Checker: correct / almost / wrong]
  CK --> TU{Tutor connected,<br/>typed, not correct, online?}
  TU -- yes --> LLM[Claude may raise one step] --> F
  TU -- no --> F[Feedback sheet]
  F --> SCH[FSRS schedules the card]
  SCH --> MISS{Wrong?}
  MISS -- yes --> RQ[Requeue later in session, max 2]
  MISS -- no --> NEXT
  RQ --> NEXT{Minutes reached?}
  NEXT -- no --> CTRL[Controller: accuracy over last 10<br/>over 90% harder · under 70% easier] --> Q
  NEXT -- yes --> RES[Results: new · stronger · to fix · tomorrow]
  RES --> T
```

## 4. Goal setting and the weekly check (CUJ-7, CUJ-8)

```mermaid
flowchart TD
  G[Pick goal type] --> K{Type}
  K -- Level by date / Trip --> D[Pick level + date] --> CALC
  K -- Steady --> MIN[Pick minutes/day] --> PROJ[Projected date]
  K -- Maintain --> MT[5 min, reviews only]
  CALC[min/day = hours × pair multiplier − classes ÷ weeks × days] --> LBL{Label}
  LBL -->|up to 45 min| OK[Relaxed / Steady / Ambitious] --> SAVE
  LBL -->|over 45 min| AMB[Very demanding: offer the date at 30 min/day, or the level reachable by the date] --> SAVE[Set my goal]
  SAVE --> TD[Today target updates]
  TD -. 7+ days later, first open of the week .-> WC[Weekly check: Keep date +X min · Move date · Keep pace]
```

## 5. Sign in: email code or Google (CUJ-15, 17, 18)

```mermaid
flowchart TD
  E1[Welcome: I have an account] --> AP
  E2[Settings: Sync across devices] --> AP
  AP[/account/] --> CH{Method}
  CH -- Continue with Google<br/>only if enabled and online --> GO[Supabase → Google consent]
  GO -- invited email --> RET[Back to /account?code=…]
  GO -- not invited --> ERRNI[“Not invited yet”]
  GO -- cancelled --> ERRG[“Google sign-in didn't finish” + email form]
  RET --> EX[Exchange code for session · PKCE<br/>strip code from URL] --> FL
  CH -- Email --> EM[Type email → Send code]
  EM -- not invited --> ERRNI
  EM -- too many tries --> ERRT[“Wait a minute and try again”]
  EM --> CODE[Type 6-digit code]
  CODE -- wrong/expired --> ERRC[“That code didn't work”] --> CODE
  CODE -- Send a new code --> EM
  RET -- different browser --> ERRB[“Use your email code here”]
  CODE -- ok --> FL[First login on this device]
  FL --> FLK{Who has progress?}
  FLK -- only device --> UP[Upload] --> DONE
  FLK -- only account --> DOWN[Download] --> DONE
  FLK -- neither --> DONE
  FLK -- same data --> DONE
  FLK -- both, different --> CHOOSE[Combine · Use account · Use device] --> DONE
  DONE[You're signed in] --> NX{Onboarded?}
  NX -- yes --> T[Today]
  NX -- no --> OB[Onboarding]
```

## 6. Background sync

```mermaid
sequenceDiagram
  participant UI as App (store)
  participant EN as Sync engine
  participant SB as Supabase (user_state)
  UI->>EN: commit (an answer, a goal…) → mark dirty
  Note over EN: triggers: app open · back online · app shown or hidden ·<br/>lesson ends · at most every 2 min while practising · Sync now
  alt this device started over (Reset, import, Use this device)
    EN->>SB: push_state(current rev, doc with new epoch)
    Note over SB: replaces the account copy, rev keeps increasing
  end
  EN->>SB: get rev
  alt server rev = my rev
    EN->>SB: push_state(expected_rev, doc)
    SB-->>EN: new rev
  else server moved on (another device)
    EN->>SB: pull db + rev
    alt newer app format
      EN-->>UI: status "Update Lingua", never writes
    else different epoch (another device started over)
      EN->>UI: adopt the server copy
    end
    EN->>EN: mergeDB(local, remote): union reviews, latest card wins, tombstones applied
    EN->>UI: apply merged DB
    EN->>SB: push_state(remote rev, merged)
    Note over EN,SB: retry up to 4 rounds on conflict
  end
  alt offline / error
    EN-->>UI: status "Offline — will sync later", stays dirty
  end
```

## 7. Sign out and delete (CUJ-19, CUJ-20)

```mermaid
flowchart TD
  SO[Settings → Sign out] --> SW[Wait for a running sync] --> SN[Try a last sync]
  SN --> DQ{Still unsynced?}
  DQ -- yes --> WARN[Warn: answers would be lost] --> AN{Sign out anyway?}
  AN -- no --> STAY[Stay signed in]
  AN -- yes --> WIPE
  DQ -- no --> WIPE[Wipe device progress + session<br/>optionally forget AI key] --> WEL[Welcome]

  DEL[Settings → Delete my account] --> EXP[Offer export] --> TYPE[Type ELIMINAR / DELETE]
  TYPE --> RPC[delete_me: user + server row removed]
  RPC --> GUEST[Device keeps progress as a guest]

  RST[Settings → Reset everything, signed in] --> RS2[Wipe device, new epoch] --> RS3[Upload replaces the account copy] --> RS4[Other devices adopt the empty copy]
```
