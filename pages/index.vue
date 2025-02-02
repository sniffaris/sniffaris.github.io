<script setup lang="ts">
  import InteractiveIcons from '~/components/InteractiveIcons.vue';
</script>

<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-7 fs-5">
                    <h1>Welcome to Sniffaris!</h1>
                    <div class="text-center d-block d-lg-none">
                        <nuxt-img :width="350" src="/Sniffaris_Pickle Circle (Tea).png" alt="happy whippet dog" />
                    </div>

                    <br />
                    <p>A dog walking and pet drop in service offering caring and enriching pet care in Cookridge, Tinshill and the surrounding areas.</p>

                    <p>For enquiries, please get in touch: </p>
                    <div>
                      Email - <a class="text-orange" href="mailto:jessie@sniffaris.co.uk?subject=Enquiry">jessie@sniffaris.co.uk</a><br/>
                      WhatsApp - <span class="text-orange">0113 534 6009</span>
                    </div>
                    <div>
                      <br />
                      <p>Insured and DBS checked</p>
                    </div>
                </div>

                <div class="col d-none d-lg-block">
                    <div class="position-relative d-inline-block">
                       <nuxt-img :width="523" class="img-fluid rounded" src="/Sniffaris_Pickle Circle (Tea).png" alt="happy whippet dog" />
                       <nuxt-img :width="293" class="position-absolute overlay-image" src="/96eoa1oo.png" style="border-radius: 100px;" alt="Certified dog first aider" />
                    </div>
                </div>
            </div>
            <div class="row">
              <div class="col-lg-7 fs-5">
                <br/>
                <h1>What is a sniffari?</h1>

                <p>It is a sniff safari!</p>

                <p>A dog walk where your pup leads, sniffing and exploring at their own pace. Tapping into a dog’s natural behaviours and satisfies their curiosity, keeping them happy, relaxed, and mentally enriched.</p>
              </div>
              <div class="col d-none d-lg-block align-self-end position-relative pointer-tip">
                <div class="pointer-tip text">
                  <p>
                    Hover over the icons to find out more
                  </p>
                </div>
                <div class="pointer-tip image">
                  <nuxt-img :width="200" class="img-fluid" src="/Arrow.png" />
                </div>
              </div>
              <div class="col-md-7 fs-5 d-block d-lg-none">
                <p>
                  Tap the icons to find out more
                </p>
              </div>
              <InteractiveIcons />
            </div>
        </div>
    </div>
</template>

<style scoped>

.pointer-tip {
  height: 70px;
}

.pointer-tip.text {
  position: absolute;
  top: 0px;
  right: 100px;
  width: 200px;
  text-align: center;
}

.pointer-tip.image {
  position: absolute;
  top: 50px;
  right: 185px;
}

.overlay-image {
  bottom: -150px; /* Moves it slightly below */
  left: -60px; /* Moves it slightly more to the left */
  width: 293px;
  border-radius: 100px; /* Makes it circular */
}

@media (min-width: 576px) {
  .overlay-image {
    width: 90px;
    bottom: -15px;
    left: -15px;
  }
}

/* 📊 Medium screens (md: ≥768px) */
@media (min-width: 768px) {
  .overlay-image {
    width: 120px;
    bottom: -20px;
    left: -20px;
  }
}

/* 🖥 Large screens (lg: ≥992px) */
@media (min-width: 992px) {
  .overlay-image {
    width: 160px;
    bottom: -25px;
    left: -25px;
  }
}

/* 🖥️ Extra Large screens (xl: ≥1200px) */
@media (min-width: 1200px) {
  .overlay-image {
    width: 180px;
    bottom: -30px;
    left: -30px;
  }
}

/* 🔲 XXL Screens (xxl: ≥1400px) */
@media (min-width: 1400px) {
  .overlay-image {
    width: 200px;
    bottom: -35px;
    left: -35px;
  }
}

</style>