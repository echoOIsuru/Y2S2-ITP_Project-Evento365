import React, { Component } from 'react';

class FooterComponent extends Component {

    render() {
        return (
            <div>


                <footer>
                    <section class="section-small-padding text-center background-dark full-width">
                        <div class="line">
                            <div class="margin">

                                <div class="s-12 m-12 l-4 margin-m-bottom-30">
                                    <h3 class="text-size-16">EVENTO 365</h3>
                                    <p class="text-size-14">
                                        Responsive Street 7<br />
                                        Sri Lanka<br />       
                                    </p>
                                </div>

                                <div class="s-12 m-12 l-4 margin-m-bottom-30">
                                    <h3 class="text-size-16">E-mail</h3>
                                    <p class="text-size-14">
                                        evento365@eventmanagement.com<br />
                                        office@evento365.com
                                    </p>
                                </div>

                                <div class="s-12 m-12 l-4 ">
                                    <h3 class="text-size-16">Phone Numbers</h3>
                                    <p class="text-size-14">
                                        081 2321 844 <br />
                                        077 3542 564 <br />
                                        072 5476 465 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr class="break margin-top-bottom-0" style={{borderColor: 'rgba(0, 0, 0, 0.80)'}} />


                    <section class="padding background-dark full-width">
                        <div class="text-center">
                            <p class="text-size-12">Copyright 2021, KDY_2021_WD02</p>
                        </div>
                    </section>
                </footer>


            </div>
        )
    }
}

export default FooterComponent;