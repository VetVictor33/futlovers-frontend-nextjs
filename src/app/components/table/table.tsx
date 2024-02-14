'use client'
import { getPlayers } from "@/app/libs/player";
import { Suspense, useEffect, useState } from "react";
import { SkeletonRow } from "./skeleton";
import { TableBody } from "./table-body";
import { TableHead } from "./table-head";
import { Player } from "@/app/interfaces/player";

export function Table (){
    const [players, setPLayers] = useState<Promise<Player[]>>(getPlayers())

    useEffect(() => {
      return () => setPLayers(getPlayers)
    },[])

    return (
      <table className="w-full text-left border-collapse">
        <TableHead/>
        <Suspense fallback={<SkeletonRow/>}>  
          <TableBody players={players} />
        </Suspense>
      </table>  
    )
  }
  