<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-7 fs-5">
                    <h1>Welcome to Sniffaris!</h1>
                    <div class="text-center d-block d-md-none">
                        <br />
                        <nuxt-img :width="300" class="circle-image" src="/3cm8xt1j.png" alt="dog walking in cookridge fields" />
                    </div>

                    <br />
                    <p>A dog walking and pet drop in service offering caring and enriching pet care, based in Cookridge,
                        covering Cookridge, Tinshill and the surrounding areas.</p>

                    <p>For any enquiries, please message me at <a href="mailto:jessie@sniffaris.co.uk?subject=Enquiry">jessie@sniffaris.co.uk</a> </p>

                    <div class="row justify-content-center">
                        <div class="col-5 pb-3">
                            <nuxt-img :width="293" class="img-fluid" src="/96eoa1oo.png" style="border-radius: 100px;" alt="Certified dog first aider" />
                        </div>
                    </div>

                    <p class="text-center">Insured and DBS checked</p>
                </div>

                <div class="col d-none d-md-block">
                    <nuxt-img :width="523" class="img-fluid rounded" src="/3cm8xt1j.png" alt="dog walking in cookridge fields" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.template-page {
    background-color: rgb(20, 55, 14);
    color: #CCE8C8;
}

.circle-image {
    width: 300px;
    height: 300px;
    border: 5px solid #CCE8C8;
}

a {
    color: #CCE8C8;
}
</style>