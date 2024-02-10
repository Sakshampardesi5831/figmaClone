"use client"
import Live from "@/components/Live";
import { Fragment, useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";
import { fabric } from "fabric";
import { handleCanvasMouseDown, handleResize, initializeFabric } from "@/lib/canvas";
export default function Page() {

  const canvasRef=useRef<HTMLCanvasElement>(null);
  const fabricRef=useRef<fabric.Canvas | null>(null);
  const isDrawing=useRef(false);
  const shapeRef=useRef<fabric.Object | null>(null);
  const selectedShapeRef=useRef<string | null>(null);
  // useEffect(()=>{
  //   const canvas=initializeFabric({canvasRef,fabricRef});

  //   canvas.on('mouse:down',(options: fabric.IEvent)=>{
  //      handleCanvasMouseDown({
  //       canvas,
  //       options,
  //       isDrawing,
  //       shapeRef,
  //       selectedShapeRef,
  //      })
  //   })
  //   window.addEventListener('resize', () => {
  //     handleResize({ fabricRef });
  //   });
  //   return () => {
  //     // Clean up event listeners here if necessary
  //     canvas.off('mouse:down');
  //     window.removeEventListener('resize', handleResize);
  //   };
  // },[])
  return (
    <Fragment>
      <main className="h-screen overflow-hidden">
        <NavBar/>
        <section className="flex h-full flex-row">
        <LeftSideBar/>
        <Live/>
        <RightSideBar/>
        </section>
      </main> 
    </Fragment>
  );
}