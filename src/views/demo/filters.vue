<template>
  <h1>{{ n }} -> {{ n|toThousandFilter }}</h1>
</template>

<script>
export default {
  data() {
    return {
      n: 1234567890
    };
  }
};
</script>