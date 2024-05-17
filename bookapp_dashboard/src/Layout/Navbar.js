export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark  ">
      <div class="container-fluid ">
        <div
          class="navbar-nav "
          style={{ marginLeft: "40%", fontSize: "20px" }}
        >
          <a class="nav-link active text-white" aria-current="page" href="/">
            Home
          </a>
          <a class="nav-link text-white" href="/favorites">
            Favorites
          </a>
        </div>
      </div>
    </nav>
  );
};
