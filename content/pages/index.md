---
draft: true
blocks:
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: pt-20 pb-20 pr-20 pl-20
      contentWidth: w-full
      columns: '1'
      labelStyles: 'text-white font-1 text-base mb-0 '
      headlineStyles: 'text-white font-2 text-2xl mb-1 '
      subheadStyles: 'text-gray-light font-2 text-xl mb-4 '
      textStyles: 'text-white font-1 text-base mb-10 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-gray-dark
      padding: pt-8 pb-8 pr-8 pl-8
      type: solid
      borderStyles: border-gray undefined-0
      labelStyles: 'text-white font-1 text-sm mb-0 '
      headlineStyles: text-white font-1 text-lg mb-3 font-bold
      subheadStyles: 'text-white font-1 undefined mb-0 '
      textStyles: 'text-white font-1 text-base mb-0 '
      buttonType: primary
    background:
      fillStyles: bg-black
    label: ''
    headline: Publicly reachable nodes
    subhead: 'TCP, or even better QUIC'
    body: >
      Full nodes (e.g. go-libp2p, rust-libp2p, node.js-libp2p) use TCP and QUIC
      to connect to each other. Imagine two servers running in data centers.


      ### TCP in libp2p


      *   First a node establishes a TCP connection to another node.

      *   They then negotiate a security protocol (Noise, TLS) and perform a
      cryptographic handshake. The connection is now encrypted and the peer IDs
      have been verified.

      *   They then apply a stream multiplexer (mplex, yamux).


      TCP is a solid option, works in all networks (home and private). However,
      setting up a the libp2p takes quite a few network roundtrips.
    items:
      - headline: TCP in libp2p
        subhead: ''
        text: >
          *   First a node establishes a TCP connection to another node.

          *   They then negotiate a security protocol (Noise, TLS) and perform a
          cryptographic handshake. The connection is now encrypted and the peer
          IDs have been verified.

          *   They then apply a stream multiplexer (mplex, yamux).


          TCP is a solid option, works in all networks (home and private).
          However, setting up a the libp2p takes quite a few network roundtrips.
      - headline: Support
        subhead: ''
        text: "*   go-libp2p: ✔\n*   rust-libp2p: ✔\n*   node.js-libp2p: ✔\n*   Chrome: ❌\_(not possible)\n*   Firefox: ❌\_(not possbile)\n*   Safari: ❌\_(not possible)\n"
    _template: textCards
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: pt-0 pb-20 pr-20 pl-20
      contentWidth: w-full
      columns: '1'
      labelStyles: 'text-white font-1 text-base mb-0 '
      headlineStyles: 'text-white font-2 text-2xl mb-1 '
      subheadStyles: 'text-gray-light font-2 text-xl mb-4 '
      textStyles: 'text-white font-1 text-base mb-10 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-gray-dark
      padding: pt-8 pb-8 pr-8 pl-8
      type: solid
      borderStyles: border-gray undefined-0
      labelStyles: 'text-white font-1 text-sm mb-0 '
      headlineStyles: text-white font-1 text-lg mb-3 font-bold
      subheadStyles: 'text-white font-1 undefined mb-0 '
      textStyles: 'text-white font-1 text-base mb-0 '
      buttonType: primary
    background:
      fillStyles: bg-black
    label: ''
    headline: ''
    subhead: ''
    body: >
      QUIC is a new transport protocol which is always encrypted (using TLS 1.3)
      and provides native stream multiplexing.
    items:
      - headline: QUIC in libp2p
        subhead: ''
        text: >
          Under most conditions, QUIC provides superior performance to TCP: The
          libp2p handshake is (at least) 3 network round-trips faster, and
          provides better performance in shaky network conditions.


          To verify the remote’s peer ID, it is [added to the TLS
          certificate](https://github.com/libp2p/specs/blob/master/tls/tls.md)
          (including a signature using the host’s key) which is used during the
          handshake. Once the handshake is complete, both sides have
          cryptographically verified each other’s identity.
      - headline: Support
        subhead: ''
        text: "*   go-libp2p: ✔\n*   rust-libp2p: ✔\n*   node.js-libp2p: ✔\n*   Chrome: ❌\_(not possible)\n*   Firefox: ❌\_(not possbile)\n*   Safari: ❌\_(not possible)\n"
    _template: textCards
meta:
  pageTitle: Microgen
  pageDescription: Make modern web 3.0 ready websites with a real-time visual editor.
---

