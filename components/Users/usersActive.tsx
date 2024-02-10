import React, { Fragment, useMemo } from "react";
import { Avatar } from "./Avatar";
import { RoomProvider, useOthers, useSelf } from "../../liveblocks.config";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import { generateRandomName } from "@/lib/utils";

 export const  ActiveUsers=()=> {
  const users = useOthers();
  const currentUser = useSelf();
  const hasMoreUsers = users.length > 3;
  console.log(currentUser);

  const memoizeUsers=useMemo(()=>{
      return (
         <Fragment>
              <div className="flex items-center justify-center gap-1 py-2">
      <div className="flex pl-3">
      {currentUser && (
            <Avatar name="You" otherStyles="border-[3px] border-primary-green" />
        )}
        {users.slice(0, 3).map(({ connectionId, info }) => {
          return (
            <Avatar key={connectionId}  name={generateRandomName()} otherStyles="-ml-3" />
          );
        })}

        {hasMoreUsers && <div className={styles.more}>+{users.length - 3}</div>}
      </div>
    </div>
         </Fragment>
      )
  },[users.length])
  return memoizeUsers
}

// src={currentUser.info.avatar} name="You"