<template>
  <nav>
    <div class="nav-header">
      <div class="text-input">
        <input ref="refName" type="text" v-model.trim="name" @keyup.enter="addUser"/>
        <button class="btn-add" @click.prevent="addUser">Add</button>
      </div>
      <div class="account">
        <span class="name">{{ accountName }}</span>
        <img class="avatar" :src="accountAvatar" width="40" height="40" />
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, useStore } from "vuex";
import { ref, toRefs, reactive, onMounted, computed } from "vue"

export default {
  name: "NavBar",

  setup() {
    const state = reactive({
      name: "",
    })

    const store = useStore()
    const refName = ref(null)

    // hooks
    onMounted(() =>
      refName.value.focus()
    )

    // computed
    const accountName = computed(
      state => store.state.account.accountName
    )

    const accountAvatar = computed(
      state => store.state.account.accountAvatar
    )

    // methods
    const addUser = () => {
      store.commit("users/ADD_USER", state.name);
      state.name = ""
    }

    return {
      // refs
      refName,

      // data
      accountName,
      accountAvatar,
      ...toRefs(state),

      //methods
      addUser,
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  background: $vue-green-minus-5;
  width: 100%;
  height: 64px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;

  .nav-header {
    background: $vue-green;
    max-width: $page-width;
    height: 100%;
    display: flex;
    align-items: center;
    margin: auto;

    .text-input {
      background: $vue-green-minus-10;
      border-radius: 4px;
      display: flex;
      align-items: center;
      width: 100%;
      height: 40px;
      margin: 0 12px;
      padding: 4px 8px;

      input[type="text"] {
        font-family: $font-primary, sans-serif;
        font-size: 22px;
        color: #fff;
        background: transparent;
        border: none;
        outline: none;
        width: 100%;
        height: 32px;
        line-height: 32px;
      }

      .btn-add {
        color: $vue-dark;
        &:hover {
          background: #fff;
        }
      }
    }

    .account {
      background: $vue-green-minus-10;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 8px;
      cursor: pointer;

      .name {
        font-size: 16px;
        text-shadow: 1px 1px $vue-dark;
        padding: 0 8px;
      }

      .avatar {
        border-radius: 50%;
      }
    }
  }
}
</style>
