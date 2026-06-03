import { useEffect, useRef, useState } from "react"
import type { Hero } from "../types/hero"

export default function Dashboard() {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const fetched = useRef(false);

    useEffect(() => {
    if (!fetched.current) {
        fetch('http://localhost:3000/heroes?_limit=4').then(res => {
            return res.json();
        }).then(data => {
            setHeroes(data);
        })
        fetched.current = true;
    }
    }, []);
  return (
    <div>Dashboard</div>
  )
}