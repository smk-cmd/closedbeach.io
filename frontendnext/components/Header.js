import { ConnectButton } from "web3uikit"
import Link from "next/link"

export default function Header() {
    return (
        <nav>
            <Link href="/">Closed Beach</Link>
            <Link href="/sell-nft">Sell NFT</Link>
            <ConnectButton />
        </nav>
    )
}
