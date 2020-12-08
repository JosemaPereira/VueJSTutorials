import { ref } from 'vue';
export default function useDebounce() {
  const timeOut = ref('');

  function debounce(func, wait = 1000) {
    clearTimeout(timeOut.value);
    timeOut.value = setTimeout(func, wait);
  }

  return debounce;
}
