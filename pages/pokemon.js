import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/Link';

export default function pokemon({ poke }) {
    let [amount, setAmount] = useState(1)
    const price = Number(Math.random().toString().substring(0,5))

    return (
        <>
        <Layout title={poke.name}>
            <h1 id='title' className="text-5xl mb-8 text-center">Poke NFT</h1>
            <div className=' border-gray-800 shadow-xl py-8 bg-gray-200 rounded-md'>
            <div className='flex flex-row my-20 mx-20 w-fit'>
                <div className='w-auto'>
                    <h1 className="text-4xl mb-2 text-center capitalize">
                        {poke.name}
                    </h1>
                    <img className="mx-auto w-40" src={poke.image} alt={poke.name} />
                </div>
                <div className='mx-40'>
                    <p>
                        <span className="font-bold">Weight:</span> {poke.weight}
                    </p>
                    <p>
                        <span className="font-bold">Experience:</span> {poke.base_experience}
                    </p>
                    <p>
                        <span className="font-bold">Height:</span>
                        {poke.height}
                    </p>
                    <h2 className="text-2xl mt-6">Types</h2>
                    {poke.types.map((type, index) => (
                        <p key="index">{type.type.name}</p>
                        ))}
                </div>
            </div>
            <span className='flex flex-row justify-center'>
                <button onClick={()=>{ amount>=1 && setAmount(amount--)}}className='bg-blue-500 hover:bg-blue-700 text-white font-bold mx-20 py-2 px-6 rounded'>-</button>
                <h2>{amount}</h2>
                <button onClick={()=>{ amount<=10 && setAmount(amount++)}}className='bg-blue-500 hover:bg-blue-700 text-white font-bold mx-20 py-2 px-6 rounded'>+</button>
            </span>
            <div className='my-7 text-center'>
                <h1 className="text-3xl mt-6 mb-2">{price*amount} ETH</h1>
            </div>
            <div className='my-10 flex flex-row justify-between'>
                <button className='bg-gray-500 hover:bg-gray-700 text-white font-bold mx-20 py-2 px-4 rounded'>
                    <Link href="/">
                        Go Back
                    </Link>
                </button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold mx-20 py-2 px-6 rounded'>
                    <Link href={`/purchase?id=${poke.id}`}>
                        Purchase
                    </Link>
                </button>
            </div>
            </div>
        </Layout>
        </>
    );
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
