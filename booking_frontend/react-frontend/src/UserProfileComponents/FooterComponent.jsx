import React, { Component } from 'react';

class FooterComponent extends Component {

    render() {
        return (
            <div>


                <footer>

                    <div class="background-dark padding text-center footer-social">
                        <a class="margin-right-10" href="https://www.facebook.com"><i class="icon-facebook_circle text-size-30"></i> <span class="text-strong text-white hide-s hide-m">FACEBOOK</span></a>
                        <a class="margin-right-10"  href="https://www.twitter.com"><i class="icon-twitter_circle text-size-30"></i> <span class="text-strong text-white hide-s hide-m">TWITTER</span></a>
                        <a class="margin-right-10"  href="https://www.instagram.com"><i class="icon-instagram_circle text-size-30"></i> <span class="text-strong text-white hide-s hide-m">INSTAGRAM</span></a>
                        <a href="https://www.linkedin.com"><i class="icon-linked_in_circle text-size-30"></i> <span class="text-strong text-white hide-s hide-m">LINKEDIN</span></a>
                    </div>


                    <section class="section-small-padding text-center background-dark full-width">
                        <div class="line">
                            <div class="margin">

                                <div class="s-12 m-12 l-4 margin-m-bottom-30">
                                    <h3 class="text-size-16">Company Address</h3>
                                    <p class="text-size-14">
                                        Responsive Street 7<br />
                                        London - United Kingdom<br />
                                        Europe
                                    </p>
                                </div>

                                <div class="s-12 m-12 l-4 margin-m-bottom-30">
                                    <h3 class="text-size-16">E-mail</h3>
                                    <p class="text-size-14">
                                        contact@sampledomain.com<br />
                                        office@sampledomain.com
                                    </p>
                                </div>

                                <div class="s-12 m-12 l-4 ">
                                    <h3 class="text-size-16">Phone Numbers</h3>
                                    <p class="text-size-14">
                                        0800 4521 800 50<br />
                                        0450 5896 625 16<br />
                                        0798 6546 465 15
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr class="break margin-top-bottom-0" style={{borderColor: 'rgba(0, 0, 0, 0.80)'}} />


                    <section class="padding background-dark full-width">
                        <div class="text-center">
                            <p class="text-size-12">Copyright 2019, Vision Design - graphic zoo</p>
                            <p class="text-size-12">All images is purchased from Bigstock. Do not use the images in your website.</p>
                        </div>
                    </section>
                </footer>


            </div>
        )
    }
}

export default FooterComponent;