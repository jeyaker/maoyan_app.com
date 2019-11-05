<template>
  <div id="home">
    <div id="top">
      <div id="t-l">
        <span>杭州</span>
        <i class="fas fa-caret-down"></i>
      </div>
      <div id="t-m">
        <router-link tag="span" :to="{
          name:'f-hot'
        }">正在热映</router-link>
        <router-link tag="span" :to="{
          name:'f-coming'
        }">即将上映</router-link>
      </div>
      <div id="t-r">
        <i class="fas fa-search"></i>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/border.styl';

#home {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  #top {
    height: 0.44rem;
    display: flex;
    border: 0 0 1px 0, #ccc;

    #t-l {
      flex: 70;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #666;

      span {
        font-size: 0.15rem;
      }

      i {
        margin: 0.05rem 0.04rem 0.04rem 0.05rem;
      }
    }

    #t-m {
      flex: 208;
      display: flex;
      justify-content: space-around;
      font-size: 0.15rem;
      font-weight: bold;
      align-items: center;
    }

    #t-r {
      flex: 60;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .list {
    height: 100%;
    overflow: hidden;
  }
}
</style>