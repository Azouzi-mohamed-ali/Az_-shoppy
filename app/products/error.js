"use client";
import { useEffect } from "react";
export default function Error({ error }) {
 useEffect(() => {
 console.log("err => ", error);
 }, [error]);
 return (
 <div className="row mt-5">
 <div className="col-9 mt-5">
 <h2 className="d-flex justify-content-center mt-5">Error! Something
went wrong.</h2>
 </div>
 </div>
 );
} 