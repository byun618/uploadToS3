<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="form-group">
      <label for="image" class="font-weight-bold"
        >쿠폰 이미지 (파일명을 쿠폰번호로 설정 해주시기 바랍니다.)</label
      >
      <input
        type="file"
        id="upload"
        ref="image"
        @change="onImage"
        class="dropbox form-control"
        style="width: 200px; min-height: 200px"
        multiple
      />
      <img
        v-for="image in images"
        :src="image.src"
        :key="image.src"
        class="w-100"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style></style>
