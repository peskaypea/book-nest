<script lang="ts">
  import bookNestLogo from "$assets/app-logo.svg";
  import Button from "$components/Button.svelte";
</script>

<header>
  <a href="/"> <img src={bookNestLogo} class="logo" alt="Go to home" /></a>
  <nav>
    <ul>
      <li><Button isMenu={true} href="/register">Create account</Button></li>
      <li>
        <Button isMenu={true} isSecondary={true} href="/login">Login</Button>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 4vw;
  }
  ul {
    display: flex;
    align-items: center;
    column-gap: 24px;
  }

  .logo {
    height: 72px;
  }
</style>
