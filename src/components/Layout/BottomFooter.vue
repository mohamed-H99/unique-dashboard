<template>
  <footer id="bottom-footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
      </ul>
      <p class="footer-line">
        Copyright &copy; 2021 ahmedhashem
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "BottomFooter"
};
</script>

<style lang="scss">
#bottom-footer {
  background-color: #fff;
  .container-fluid {
    padding: 1rem 0;
    border-top: 1px solid var(--grey-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
  }
  .footer-line {
    margin-bottom: 0;
    opacity: 0.4;
    font-weight: 700;
  }
}
</style>