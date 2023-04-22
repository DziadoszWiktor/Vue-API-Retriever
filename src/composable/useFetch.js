import { toRefs, reactive } from 'vue';

export function useFetch(url, auto = true, init = {}) {
  
  const state = reactive({
    data: null,
    error: null,
    loading: false
  });

  const fetchData = async () => {
    
    state.loading = true;
    try {
      const response = await fetch(url, init);
      if (response.ok) {
        state.data = await response.json();
      }
      else {
        state.error = Error(`${response.status} ${response.statusText}`)
      }
    } catch (e) {
      state.error = e;
    } finally {
      state.loading = false;
    }
  };

  if (auto) fetchData();
  
  return { ...toRefs(state), fetchData };
}