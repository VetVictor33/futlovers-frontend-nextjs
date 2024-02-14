'use client'
import { getPlayers } from "@/app/libs/player";
import { Suspense, useEffect, useState } from "react";
import { SkeletonRow } from "./skeleton";
import { TableBody } from "./table-body";
import { TableHead } from "./table-head";
import { Player } from "@/app/interfaces/player";

export function Table (){
    const [players, setPLayers] = useState<Promise<Player[]>>(getPlayers())
    const [deletedFlag, setDeletedFlag] = useState(false)

    const reverseFlag = () => {
      setDeletedFlag((flag) => !flag)
    }

    useEffect(() => {
      setPLayers(getPlayers)
    },[deletedFlag])

    return (
      <table className="w-full text-left border-collapse">
        <TableHead/>
        <Suspense fallback={<SkeletonRow/>}>  
          <TableBody players={players} flag={reverseFlag}/>
        </Suspense>
      </table>  
    )
  }
  