import { ref } from 'vue';
export default function useAutoCount(initialCount: number) {
  const count = ref(initialCount);

  setInterval(() => {
    count.value++;
  }
  , 1000);

  return { count };
}