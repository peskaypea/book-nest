<script lang="ts">
    import {Button} from "$components";
    import type { ActionData } from "../../routes/register/$types";

  interface ComponentProps {
    isReqistration: boolean;
    form: ActionData;
  }



  let {isReqistration, form}: ComponentProps = $props()
</script>

<div class="default-margin auth-container">
  <h1 class="mb-l">{isReqistration ? 'Register' : 'Login'}</h1>
  <div class="form-and-social-login">
    <form class="auth-form" action="" method="POST">
      {#if form && form.errors?.length}
      {#each form.errors as error}
      <div class="auth-error"><p>{error}</p></div>
      {/each}
      {/if}
      {#if isReqistration}
        <input placeholder="Name" type="text" name="name"/>
      {/if}
        <input placeholder="Email" type="text" name="email"/>
        <input placeholder="Password" type="password" name="password"/>
        {#if isReqistration}
        <input placeholder="Confirm Password" type="password" name="passwordConfirmation"/>
        <Button type="submit">{isReqistration ? 'Register' : 'Login'}</Button>
        <p class="auth-hint mt-s"> Already have an account? <a href="/login">Log In.</a></p>
        {:else}
         <p class="auth-hint mt-s"> Don't have an account yet? <a href="/register">Register Now</a></p>
         {/if}
    </form>

    <div class="social-login"></div>
  </div>
</div>

<style>
  .auth-container {
    margin-top: 80px;
  }

  .form-and-social-login {
    display: flex;
  }

  .auth-form {
    display: flex;
    flex-direction: column;
    align-items: start;
    border-right: 1px solid grey;
    padding-right: 80px;
    width: 40%;
  }

  .auth-hint {
    font-size: 16px;
    color: grey;
  }

  .auth-error {
    background-color: rgb(122, 35, 35);
    color: white;
    font-size: 18px;
    border-radius: 12px;
    padding: 12px;
    width: 100%;
    margin-bottom: 8px;
  }

  .auth-error:last-of-type {
    margin-bottom: 16px;
  }

  .auth-form input {
    width: 100%;
    margin-bottom: 12px;
  }

  .auth-form input:last-of-type {
    margin-bottom: 30px;
  }

  .social-login {
    padding-left: 80px;
    width: 40%;
  }
</style>
