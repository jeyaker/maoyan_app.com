<template>
  <div id="bk">
    <header>猫眼电影</header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <footer>
      <ul>
        <router-link
          tag="li"
          v-for="item in data"
          :key="item.id"
          active-class="active"
          :to="{
          name:item.name
        }"
        >
          <i class="fas" :class="[item.icon]"></i>
          <span>{{item.text}}</span>
        </router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      data: [
        {
          id: 1,
          text: "电影",
          icon: "fa-home",
          name: "home"
        },
        {
          id: 2,
          text: "影院",
          icon: "fa-apple-alt",
          name: "cinema"
        },
        {
          id: 3,
          text: "我的",
          icon: "fa-user-alt",
          name: "mine"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/css/border.styl';
@import '../assets/css/theme.styl';

#bk {
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.18rem;
    color: #fff;
    height: 0.5rem;
    background-color: $theme_color;
  }

  footer {
    display: flex;
    border: 1px 0 0 0, #ccc;

    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;

      li {
        display: flex;
        flex-direction: column;
        height: 0.48rem;
        justify-content: center;
        color: #696969;

        i {
          font-size: 0.2rem;
          margin-bottom: 0.05rem;
        }

        span {
          font-size: 0.1rem;
        }

        &.active {
          color: $theme_color;
        }
      }
    }
  }
}
</style>