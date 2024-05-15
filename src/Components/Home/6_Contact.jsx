import React from "react";

function Contact() {
    return (
        <div className=" flex justify-center items-center py-6 gap-8">
            <div>
                <div>Connect</div>
                <div>Contact Support</div>
                <div>
                    Have a question? need assistance? get in touch with our
                    support team
                </div>
                <div>
                    <div className=" flex justify-center items-center gap-8 ">
                        <input type="text" className=" bo"/>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <textarea name="" id=""></textarea>
                </div>
            </div>
            <div className=" hidden md:block"></div>
        </div>
    );
}

export default Contact;
