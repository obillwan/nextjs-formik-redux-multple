import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function RefillTable({ scripts }) {
  return (
    <div>
      {scripts?.map((post) => {
        return (
          <div key="{post.id}">
            <h3>
              {post.id} | {post.copay}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default RefillTable;
