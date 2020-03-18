<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { play, stop } from "../core/Audio";

export default {
  mounted() {
    const wsc = new WebSocket("ws://192.168.1.40:8081");

    wsc.onopen = e => {
      console.log(e);
    };

    wsc.onmessage = e => {
      console.log(e);
      stop("/aimer.mp3");
      play("/resah.mp3")
        .then(() => {
          alert("SWITCHED");
        })
        .catch(() => {
          alert("LOCKED2");
        });
    };

    play("/aimer.mp3")
      .then(() => {
        alert("PLAYED");
      })
      .catch(() => {
        alert("LOCKED");
      });
  }
};
</script>
