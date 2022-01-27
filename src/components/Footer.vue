<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }"
            >FireBlogs</router-link
          >
          <ul>
            <li>
              <a href="#"> <youtube class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"> <twitter class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"> <instagram class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"> <linkedin class="svg-icon" /></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'Blogs' }"
              >Blogs</router-link
            >
            <router-link v-if="user" class="link" to="#"
              >Create Post</router-link
            >
            <router-link v-if="!user" class="link" :to="{ name: 'Login' }"
              >Log in / Register</router-link
            >
          </ul>
        </div>
        <div class="right">
          <p>All Copyrights reserved 2021</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import youtube from "../assets/Icons/youtube-brands.svg";
import twitter from "../assets/Icons/twitter-brands.svg";
import instagram from "../assets/Icons/instagram-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";
export default {
  name: "footer-vue",
  components: {
    youtube,
    twitter,
    instagram,
    linkedin,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  text-align: center;
  margin-top: auto;
  padding: 100px 25px;
  background-color: #303030;

  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0;
    }

    > div {
      display: flex;
      flex: 1;
    }

    .left {
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }
    }

    .header {
      font-size: 24px;
      color: #fff;
      text-decoration: none;
      font-weight: 600;
    }

    .col-1,
    .col-2 {
      gap: 32px;
      display: flex;
      flex: 1;

      @media (min-width: 800px) {
        text-align: initial;
      }
    }

    .col-1 {
      flex-direction: column;

      h2 {
        text-align: center;

        @media (min-width: 800px) {
          text-align: initial;
        }
      }

      ul {
        margin-top: auto;
        display: inherit;
        flex-direction: row;
        gap: 15px;

        li {
          display: flex;
          align-items: center;

          .svg-icon {
            width: 24px;
            height: auto;
            color: #fff;
          }
        }
      }
    }

    .col-2 {
      ul {
        height: 100%;
        justify-content: center;
        align-items: flex-start;
        display: inherit;
        flex-direction: row;
        gap: 8px;

        @media (min-width: 800px) {
          flex-direction: column;
        }

        .link {
          font-size: 16px;
          font-weight: 500;
          color: #fff;
          text-decoration: none;
        }
      }
    }

    .right {
      gap: 32px;
      color: #fff;
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      @media (min-width: 800) {
        align-items: flex-end;
        gap: 0;
      }
    }

    p {
      margin-top: auto;
      text-align: left;
    }
  }
}
</style>
