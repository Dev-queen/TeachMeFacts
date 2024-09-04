import "./Styles.css";
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function App() {
  const appTitle = "Hello yoyo";
  return (
    <>
      {/* Header component */}
      <header className="header">
        <div className="header-logo">
          <img src="logo.png" alt="Logo" height="68" width="68" />
          <h1>{appTitle}</h1>
        </div>

        <button className="share-btn">Share a fact</button>
      </header>
      <FactsForm />

      <main className="main">
        <CategoryFilter />
        <FactsList />
      </main>
    </>
  );
}
function FactsForm() {
  return <form className="fact-form">form </form>;
}
function CategoryFilter() {
  return <aside>Category Filter</aside>;
}
function FactsList() {
  //temporary variable
  const facts = initialFacts;
  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <li key={fact.id} className="fact">
            <p>
              {fact.text}
              <a className="source" href={fact.source} target="_blank">
                Source
              </a>
            </p>
            {/* <span className="tag" style={{ backgroundColor: "#3b82f6" }}> */}
            <span
              className="tag"
              style={{
                backgroundColor: CATEGORIES.find(
                  (cat) => cat.name === fact.category
                ).color,
              }}
            >
              {/* #Technology */}
              {fact.category}
            </span>
            <div className="vote-buttons">
              <button>
                👍
                {fact.votesInteresting}
                {/* 👍<strong>ok 23</strong> */}
              </button>
              <button>👎 {fact.votesFalse}</button>
              <button>😍 {fact.votesInteresting}</button>
              <button>😥 {fact.votesInteresting}</button>
              <button>🤯 {fact.votesMindblowing}</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
