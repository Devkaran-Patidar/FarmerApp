export default function Mainhome() {
  return (
    <main className="main_home_page">
      <section id="home">
        <h1>
          Fresh Farm Product <br />
          Delivered to Your Home
        </h1>
        <div className="buttons">
          <button>
            <a href="/login">Login</a>
          </button>     

            <button>
            <a href="/register">Register</a>
          </button>
        </div>  
        </section>
    </main>
    );
}