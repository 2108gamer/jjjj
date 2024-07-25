"use client"
import Image from "next/image";
import { useState,  } from "react";
import brevo from '@getbrevo/brevo'
import MailSend from "@/app/send";




const Form = () => {
  const email = "ricarlopez2708@gmail.com";
  const email2 = "ricarlopez2705@gmail.com"

    
    
    
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-custom-blue">QUIERES SER MI NOVIA?</h2>
        </div>
      
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form 
          onSubmit={
            async (e) => {
              e.preventDefault()
              const formData = new FormData(e.target as HTMLFormElement)
              await MailSend(formData)}
          }
          className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-secondary">Email</label>
              <div className="mt-2">
                <input placeholder="Ingresa tu email"id="email" name="email" type="email" autoComplete="email" required className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                </input>
              </div>
            </div>
      
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-secondary">Responde a la pregunta</label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">No estoy segura</a>
                </div>
              </div>
              <div className="mt-2">
                <input 
                 
                 id="password" placeholder="Email secundario"name="ema2" type="email" autoComplete="current-password" required className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                </input>
              </div>
            </div>
      
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Acepto Ric</button>
            </div>
          </form>
      
          <p className="mt-10 text-center text-sm text-gray-500">
            
            <a href="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Regresar al inicio</a>
          </p>
        </div>
      </div>
    )
}  



export default Form;