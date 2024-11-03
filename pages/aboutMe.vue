<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-7 fs-5">
                    <h1>About me</h1>
                    <div class="text-center d-block d-md-none">
                        <br />
                        <NuxtImg :width="300" class="circle-image" src="/zwuu5srb.png" alt="Woodland dog walk" />
                    </div>
                    
                    <br />
                    <p>Hi, I’m Jessie!</p>

                    <p>I love animals and enjoy spending time walking in the woods with my Whippet, Pickle. Being around
                        animals always brings me so much joy, which has led me to setting up Sniffaris. </p>

                    <p>Throughout my career, I held roles that I liked but didn’t feel truly passionate about. It wasn’t
                        until I started volunteering at farms and horse sanctuaries that I realised my happiest moments
                        were spent outdoors, surrounded by animals. After years of encouragement from friends and family
                        to pursue my love for animals, I finally followed my heart and turned dog walking into my
                        full-time passion. </p>

                    <p>When it comes to caring for dogs, my top priority is making sure they’re safe, happy and
                        enriched, and totally at ease while they’re with me. </p>

                    <p>I’m always eager to expand my knowledge—which started with Canine First Aid training—so you can
                        rest easy knowing your furry friend is in safe, capable hands. Watch this space to see where my
                        learning takes me next! </p>
                </div>
                <div class="col d-none d-md-block">
                    <NuxtImg :width="523" class="img-fluid rounded" src="/zwuu5srb.png" alt="Woodland dog walk" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .template-page {
        background-color: #CCE8C8; 
        color: rgb(20, 55, 14);
    }
    .circle-image {
        width: 300px;
        height: 300px;
        border: 5px solid rgb(20, 55, 14);
    }
</style>