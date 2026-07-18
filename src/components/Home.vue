<script setup></script>

<template>
  <div class="home-content">
    <p class="blurb">
      Hello internet! <br>
      My name is Sonnie (pronounced Sonny) and I am a Software Engineering Student at SIUE
      <br><br>
      <router-link
        class="text-links"
        to="/Projects"
      >
        Click here if you want to hear about the projects I'm working on
      </router-link>
      <br>
      <router-link
        to="/About"
        class="text-links"
      >
        Click here if you want to hear more about me :)
      </router-link>
      <br><br>
    </p>
    <div class="body-items">
      <img
        class="sunset"
        src="/Sunset over water.JPG"
        alt="Sunset over water"
        title="This is a photo I took a few years back in Florida"
      >
      <div class="column">
        <p class="blurb">
          Here are some songs that have been on repeat in my brain and my car.
        </p>
        <div class="iframe-container">
          <iframe
            style="border-radius: 0px"
            src="https://open.spotify.com/embed/playlist/35cyhs5E8yGjcI4Vua6Uiu?utm_source=generator&theme=0"
            width="100%"
            height="352px"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>
