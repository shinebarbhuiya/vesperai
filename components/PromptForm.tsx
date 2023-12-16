"use client"

import * as z from "zod"

import react, { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"

import { Loader2 } from "lucide-react"



import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Button } from "./ui/button"
import Link from "next/link"
import { FaLongArrowAltRight } from "react-icons/fa";

import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import Image from "next/image"

import axios from "axios"

import { STYLES } from "@/constants"


import useStore from "@/Store"





const formSchema = z.object({
  prompt: z.string()
    .min(4, "Prompt must be at least 4 characters long.")
    .max(120, "Prompt must not exceed 120 characters."),
  
    style: z.string({
      required_error: "Please select a style.",
    }).min(1, "Please select a style."),
});




const PromptForm = () => {

  const loading = useStore((state) => state.loading)

  // const [imageUrl, setImageUrl] = useState<string>("");

  // const setImageUrl = useStore((state) => state.setImageUrl)

  const { setImageUrl, setLoading, setImageLoading } = useStore((state) => ({
    setImageUrl: state.setImageUrl,
    setLoading: state.setLoading,
    setImageLoading: state.setImageLoading


  }));


  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        prompt: "",
        style: "",
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {
    
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    setLoading(true);
    setImageUrl("")
    

    // const style : any = STYLES.find((style) => style.name === values.style)?.prompt
    const style : any = STYLES.find((style) => style.name === values.style)

    // console.log(style.prompt)

    const data = {
      "input": {
        "prompt": `${(style.prompt).replace("{prompt}", values.prompt)}`,
        "negative_prompt": style.negative_prompt
      }
    };

    // console.log(data)

    const headers = {
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
      'Connection': 'keep-alive',
      'Content-Type': 'application/json',
      'Origin': 'https://deepinfra.com',
      'Referer': 'https://deepinfra.com/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-site',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
      'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"'
    };


    axios.post('https://api.deepinfra.com/v1/inference/stability-ai/sdxl?version=28fb12be4e4d05ff054e10eabd20e429efb98293056db1067ccdbb8ac2733b86', data, { headers })
      .then(response => {
        console.log(response.data.output[0]);
        setImageUrl(response.data.output[0]);
        
      })
      .catch(error => {
        console.error(error);
      }).finally(() => {
        setLoading(false);
      });
    console.log(values)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                      <div className="flex items-center gap-2 justify-between">
                          <p className="text-lg font-semibold">Prompt</p>
                          <Link href="https://lexica.art/">
                              <div className='flex items-center gap-1 text-md font-semibold text-green-300 hover:text-green-300/80'>
                                  <p className=" ">Explore Prompts </p>
                                  <FaLongArrowAltRight />
                              </div>
                          </Link>
                      </div>
                
                </FormLabel>
              <FormControl>
                <Textarea rows={6} className="text-md" placeholder="Describe what you want to create here " {...field} />
              </FormControl>
              <FormDescription>
                Imagine describing a photo.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />



<FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
              <div className="mt-6 flex items-center gap-2 justify-between">
                          <p className="text-lg font-semibold">Select Style</p>
                          <Link href="https://lexica.art/">
                              <div className='flex items-center gap-1 text-md font-semibold text-green-300 hover:text-green-300/80'>
                                  <p className=" ">Styles Guide </p>
                                  <FaLongArrowAltRight />
                              </div>
                          </Link>
                      </div>
                
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a style to get the best result" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                    {STYLES.map((style) => (
                        
                            <SelectItem key={style.name} value={style.name}>{style.name}</SelectItem>
                        
                    ))}
                </SelectContent>
               
              </Select>
              {/* <FormDescription>
                You can manage email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        
      
        <Button className="w-full " type="submit" disabled={loading}>
        {loading? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Imagining</>) :   (<>Create Magic</> )  }
          
          
        </Button>
      </form>
    </Form>
  )
}

export default PromptForm
