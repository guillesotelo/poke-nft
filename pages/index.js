import React, { useState } from 'react'
import Link from 'next/Link';
import Layout from '../components/Layout';

export default function Home({ pokemon }) {

    return (
        <Layout title="Poke NFT">
            <h1 id='title' className="text-5xl mb-8 text-center">Poke NFT</h1>
            <div className=''>
                {pokemon.map((poke, index) => (
                    <div key={index}>
                            <a className="border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md">
                                <img
                                    src={poke.image}
                                    alt={poke.name}
                                    className="w-20 h-20 mr-3"
                                />
                                <span className="mr-2 font-bold">
                                    {index + 1}.
                                </span>
                                <h3 className='w-40'>
                                    {poke.name}
                                </h3>
                                <span>
                                    <Link href={`/pokemon?id=${index+1}`}>
                                        <button className='right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold mx-20 py-2 px-4 rounded'>
                                            Buy
                                        </button>
                                    </Link>
                                </span>
                                <h3>{Math.random().toString().substring(0,5)} ETH</h3>
                            </a>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export async function getStaticProps(context) {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const { results } = await res.json();
        const pokemon = results.map((poke, index) => {
            const paddedId = ('00' + (index + 1)).slice(-3);

            const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
            return { ...poke, image };
        });
        return {
            props: { pokemon },
        };
    } catch (err) {
        console.error(err);
    }
}
