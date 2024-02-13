import { getPlayers } from "@/app/libs/player";
import { Suspense } from "react";
import { SkeletonRow } from "./skeleton";
import { TableBody } from "./table-body";
import { TableHead } from "./table-head";

export async function Table (){
    const players = getPlayers()
    return (
      <table className="w-full text-left border-collapse">
        <TableHead/>
        <Suspense fallback={<SkeletonRow/>}>  
          <TableBody players={players} />
        </Suspense>
      </table>  
    )
  }
  