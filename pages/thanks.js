import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/Link';

export default function purchase ({ poke }) {
    const price = Number(Math.random().toString().substring(0,4))
    
    return (
    <Layout title={poke.name}>
            <h1 id='title' className="text-5xl mb-8 text-center">Poke NFT</h1>
            <div className=' border-gray-800 shadow-xl py-8 bg-gray-200 rounded-md'>
            <div className='flex flex-col mx-20 w-fit'>
                <div className='w-auto'>
                    <h1 className="text-3xl mb-2 text-center capitalize">
                        Thanks for your purchase!
                    </h1>
                    <img className="mx-auto w-40" src={poke.image} alt={poke.name} />
                </div>
            </div>
           
            {/* <div className='text-center'>
                <h1 className="text-3xl mt-6 mb-2">{price} ETH</h1>
            </div> */}
            <div className='my-10 flex flex-col'>
                {/* <div class="mb-2 mx-20">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Deposit into wallet (ERC-20):
                    </label>
                    <input disabled value={wallet} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/>
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold mx-20 py-2 my-4 px-6 rounded'>
                    <Link href={`/thanks?id=${poke.id}`}>
                        Confirm Deposit
                    </Link>
                </button> */}
                <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold mx-20 py-2 px-4 rounded'>
                    <Link href={`/purchase?id=${poke.id}`}>
                        Go Back
                    </Link>
                </button>
            </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ query }) {
    const id = query.id;
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const poke = await res.json();
        const paddedId = ('00' + id).slice(-3);
        poke.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
        return {
            props: { poke },
        };
    } catch (err) {
        console.error(err);
    }
}