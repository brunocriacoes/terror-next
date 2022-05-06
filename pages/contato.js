import React, { useState, useEffect } from 'react';
import { MyMenu, Contato, Footer } from "../component/index"

export default function ContatoPage() {
    return (
        <>
            <MyMenu />          
            <Contato corText="#520091" corBg="#C0E0CC" pTop="150px" />
            <Footer corText="#C0E0CC" corBg="#520091" />
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {},
    }
}