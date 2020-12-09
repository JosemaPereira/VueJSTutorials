export default function(next, store) {
  setTimeout(() => {
    if (!store.state.isLoggedIn) {
      next('/');
      store.commit('setLoginModal', true);
    } else {
      next();
    }
  }, 500);
}
