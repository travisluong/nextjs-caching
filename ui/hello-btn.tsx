"use client";

export default function HelloButton() {
  function handleClick() {
    alert("hello world from full route cache example");
  }

  return <button onClick={handleClick}>click here</button>;
}
