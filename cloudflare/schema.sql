CREATE TABLE IF NOT EXISTS study_events (
  seq INTEGER PRIMARY KEY,
  learner TEXT NOT NULL,
  event_id TEXT NOT NULL,
  payload TEXT NOT NULL,
  UNIQUE (learner, event_id)
);

CREATE INDEX IF NOT EXISTS study_events_learner_seq ON study_events (learner, seq);
