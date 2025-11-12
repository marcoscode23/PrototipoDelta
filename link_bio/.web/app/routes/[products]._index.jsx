import {Fragment,useCallback,useContext,useEffect,useRef} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,DropdownMenu as RadixThemesDropdownMenu,Flex as RadixThemesFlex,IconButton as RadixThemesIconButton,Link as RadixThemesLink,ScrollArea as RadixThemesScrollArea,Text as RadixThemesText,TextField as RadixThemesTextField} from "@radix-ui/themes"
import {ChevronLeft as LucideChevronLeft,ChevronRight as LucideChevronRight,Instagram as LucideInstagram,Mail as LucideMail,MapPin as LucideMapPin,Phone as LucidePhone,Search as LucideSearch,Send as LucideSend,ShoppingCart as LucideShoppingCart,Store as LucideStore,Trash as LucideTrash,Truck as LucideTruck} from "lucide-react"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,isNotNullOrUndefined,isTrue,refs} from "$/utils/state"
import {Link as ReactRouterLink} from "react-router"
import DebounceInput from "react-debounce-input"
import {jsx} from "@emotion/react"




function Text_d3795ee4cf3dbf1a77718336c203e8f5 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p"},((reflex___state____state__link_bio___views___products___products____cart_state.total_items_rx_state_ > 0) ? ("CARRITO ("+reflex___state____state__link_bio___views___products___products____cart_state.total_items_rx_state_+")") : "CARRITO (0)"))
  )
}


function Button_95b1c403e9214672526dbb2617fcf046 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_6178a1586ab653fa3eda648d8face8f6 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_drawer", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["@media screen and (min-width: 0)"] : ({ ["width"] : "90%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "40%" }), ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["borderRadius"] : "5px", ["&:hover"] : ({ ["background"] : "#444" }) }),onClick:on_click_6178a1586ab653fa3eda648d8face8f6,size:"3"},jsx(LucideShoppingCart,{},),jsx(Text_d3795ee4cf3dbf1a77718336c203e8f5,{},))
  )
}


function Link_ced603e9ab49e4ecb79b26417cd1aedf () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/VANS_KNU_SKOOL_793"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "VANSKNUSKOOL.png" }), ({  })))], [_e], ({  })))),src:"VANSKNUSKOOL.png"},)))
  )
}


function Button_7434cbfae0583ed2f463c9b795f3615c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_85df6add2435592622f29b9c7964eef5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "VANS KNU SKOOL #793", ["imagen"] : "VANSKNUSKOOL.png", ["precio"] : "$50.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_85df6add2435592622f29b9c7964eef5},"A\u00f1adir al carrito")
  )
}


function Link_6f7b5bfda28fe0315940b51e764a752e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/VANS_U_HYLANE"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "VANSUHYLANE.png" }), ({  })))], [_e], ({  })))),src:"VANSUHYLANE.png"},)))
  )
}


function Button_09b4c0125a769a0637199e30fc90a529 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f881872f6f06b005cc1e4061af6edb1c = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "VANS U HYLANE", ["imagen"] : "VANSUHYLANE.png", ["precio"] : "$80.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_f881872f6f06b005cc1e4061af6edb1c},"A\u00f1adir al carrito")
  )
}


function Link_aa488cd73c06292f47d9870b61c510c2 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/PUMA_180"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "puma 180.png" }), ({  })))], [_e], ({  })))),src:"puma 180.png"},)))
  )
}


function Button_d8585f4e084d86dfeaa06226e09af640 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_76bd0f3390f8e84cbaa912d5d8f4d092 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "PUMA 180", ["imagen"] : "puma 180.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_76bd0f3390f8e84cbaa912d5d8f4d092},"A\u00f1adir al carrito")
  )
}


function Link_32d67b4fe16308729a60433d9fda5ddd () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/SAMBA_XLG"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "SAMBAXLG.png" }), ({  })))], [_e], ({  })))),src:"SAMBAXLG.png"},)))
  )
}


function Button_ff42ecd5c334d67145c2483fff0e272b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_42249e4ba337e8fcb49c3b3f78f2fd61 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SAMBA XLG", ["imagen"] : "SAMBAXLG.png", ["precio"] : "$80.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_42249e4ba337e8fcb49c3b3f78f2fd61},"A\u00f1adir al carrito")
  )
}


function Link_1fd9fb4c4cc820ad03ee9056a62eab8d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/AIR_FORCE"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "AIRFORCE.png" }), ({  })))], [_e], ({  })))),src:"AIRFORCE.png"},)))
  )
}


function Button_b085bdd68e423f73565e869315687a09 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_777d88b31108ac76a624078baca27470 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "AIR FORCE", ["imagen"] : "AIRFORCE.png", ["precio"] : "$80.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_777d88b31108ac76a624078baca27470},"A\u00f1adir al carrito")
  )
}


function Link_730c46ab55881d1f2aefed65dee8d539 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/CAMPUS_X_BAD_BUNNY"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "CAMPUSXBADBUNNY.png" }), ({  })))], [_e], ({  })))),src:"CAMPUSXBADBUNNY.png"},)))
  )
}


function Button_b643572ed07650afa2a3899007dd575f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_35c77b6f4e4b654ac6dee0b46ff3d2fc = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CAMPUS X BAD BUNNY", ["imagen"] : "CAMPUSXBADBUNNY.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_35c77b6f4e4b654ac6dee0b46ff3d2fc},"A\u00f1adir al carrito")
  )
}


function Link_161d31e119164163148df1215a90dc8e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/_SAMBA_795"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "SAMBA795.png" }), ({  })))], [_e], ({  })))),src:"SAMBA795.png"},)))
  )
}


function Button_32bbfff01b78cd406560fddd2378e5bd () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_d6a050dbefef6cffb9146dec011dddeb = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : " SAMBA #795", ["imagen"] : "SAMBA795.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_d6a050dbefef6cffb9146dec011dddeb},"A\u00f1adir al carrito")
  )
}


function Link_ef45bfd03381a28b4036a933813d13bf () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/_DOBLEB_DARK_669"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "DOBLEBDARK669.jpg" }), ({  })))], [_e], ({  })))),src:"DOBLEBDARK669.jpg"},)))
  )
}


function Button_8480ca9b188cc056e4e198a986ac2724 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_edbdeb791dc053ebcccea77eaba2346b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : " DOBLEB DARK #669", ["imagen"] : "DOBLEBDARK669.jpg", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_edbdeb791dc053ebcccea77eaba2346b},"A\u00f1adir al carrito")
  )
}


function Link_afc6270a7f685006d209ba5fde432a92 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/ADI_2000"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "ADI 2000.png" }), ({  })))], [_e], ({  })))),src:"ADI 2000.png"},)))
  )
}


function Button_4036d6c2d410bc91d015e2bd70f6783c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_ddaa6ca574915e559a00261c8f8c8d19 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "ADI 2000", ["imagen"] : "ADI 2000.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_ddaa6ca574915e559a00261c8f8c8d19},"A\u00f1adir al carrito")
  )
}


function Link_c6c317afd701191ae51351e7dc3ba619 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/CAMPUS_X_BADBUNNY_783_"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "CAMPUSXBADBUNNY783.png" }), ({  })))], [_e], ({  })))),src:"CAMPUSXBADBUNNY783.png"},)))
  )
}


function Button_5c1d983f1668540d7f8935a58cce480c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_fc09f3ad1c992757b1afe5400d702b24 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CAMPUS X BADBUNNY #783 ", ["imagen"] : "CAMPUSXBADBUNNY783.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_fc09f3ad1c992757b1afe5400d702b24},"A\u00f1adir al carrito")
  )
}


function Link_eba1fbf3adf5973df89b7498e325efb6 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/_SB_DUNK_778"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "SBDUNK778.png" }), ({  })))], [_e], ({  })))),src:"SBDUNK778.png"},)))
  )
}


function Button_c765c5d4f3f45877c53ec48b9ff4cf67 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b625f1b90d7b58ff7c5a9685d38e9d57 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : " SB DUNK #778", ["imagen"] : "SBDUNK778.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_b625f1b90d7b58ff7c5a9685d38e9d57},"A\u00f1adir al carrito")
  )
}


function Link_5e0d5f7f4d463f5f1aaa773ba3536505 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/_JORDAN_1_823"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "JORDAN1-823.png" }), ({  })))], [_e], ({  })))),src:"JORDAN1-823.png"},)))
  )
}


function Button_817912f4e5e0a0a9a5f835384dcedc78 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_322353b7a7e59ecbfba0c9fc50230edf = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : " JORDAN 1 #823", ["imagen"] : "JORDAN1-823.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_322353b7a7e59ecbfba0c9fc50230edf},"A\u00f1adir al carrito")
  )
}


function Link_44130eeeadef7200be773ec78457f3f5 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/CASUAL_DOBLEB_COCOA_841"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "CASUALDOBLEBCOCOA.png" }), ({  })))], [_e], ({  })))),src:"CASUALDOBLEBCOCOA.png"},)))
  )
}


function Button_7da6dec74075bebe4331f92e1e05b163 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_15a89207f10f52f48a757508d869c1f3 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CASUAL DOBLEB COCOA #841", ["imagen"] : "CASUALDOBLEBCOCOA.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_15a89207f10f52f48a757508d869c1f3},"A\u00f1adir al carrito")
  )
}


function Link_185759fca976f7ff8d48b7cc53dfc0d0 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/ADIDAS_ZORMILLEN_841"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "ADIDASORMILLEN850.png" }), ({  })))], [_e], ({  })))),src:"ADIDASORMILLEN850.png"},)))
  )
}


function Button_69e933e1891a8cf467fda210a15f05a6 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b300cdf8ea9d0547c650957c059f3a39 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "ADIDAS ZORMILLEN #841", ["imagen"] : "ADIDASORMILLEN850.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_b300cdf8ea9d0547c650957c059f3a39},"A\u00f1adir al carrito")
  )
}


function Link_42824cd8509b438f15b424e0901a3a62 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/_CONVERSE_ALL_STAR_717"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "CONVERSEALLSTAR717.png" }), ({  })))], [_e], ({  })))),src:"CONVERSEALLSTAR717.png"},)))
  )
}


function Button_4018f2a4d56502a59f6447e52634ccd2 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_38cf889401381f6da467c1bc5ff55c4f = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : " CONVERSE ALL STAR #717", ["imagen"] : "CONVERSEALLSTAR717.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_38cf889401381f6da467c1bc5ff55c4f},"A\u00f1adir al carrito")
  )
}


function Link_8ca22e90cf117b650b1b3298e81f19c3 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/SB_DUNK_LOW_798_"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "SBDUNKLOW.png" }), ({  })))], [_e], ({  })))),src:"SBDUNKLOW.png"},)))
  )
}


function Button_3377a6946514b93904521734a4ed5070 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b932ed9a87d6baacda7e677eb5cd3472 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SB DUNK LOW #798 ", ["imagen"] : "SBDUNKLOW.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_b932ed9a87d6baacda7e677eb5cd3472},"A\u00f1adir al carrito")
  )
}


function Link_5f73bb696052c3848f4df72746898829 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/VANS_KNU_SKOOL_676"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "VANSKNUSKOOLL.png" }), ({  })))], [_e], ({  })))),src:"VANSKNUSKOOLL.png"},)))
  )
}


function Button_672a8439e01dd3aa344f6164aec1a450 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f49956ea6d204aa52f839cdc388c78fc = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "VANS KNU SKOOL #676", ["imagen"] : "VANSKNUSKOOLL.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_f49956ea6d204aa52f839cdc388c78fc},"A\u00f1adir al carrito")
  )
}


function Link_c241d947d34d4116cf2a2b641e6697bd () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/JORDAN_1_LOW_X_TRAVIS_SCOTT_769"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "JORDAN1LOWXTRAVISSCOTT.png" }), ({  })))], [_e], ({  })))),src:"JORDAN1LOWXTRAVISSCOTT.png"},)))
  )
}


function Button_95b6a61c871829836e816bbbd147d0ac () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b787633e3303ed3de4277d6ecdcde1c4 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "JORDAN 1 LOW X TRAVIS SCOTT #769", ["imagen"] : "JORDAN1LOWXTRAVISSCOTT.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_b787633e3303ed3de4277d6ecdcde1c4},"A\u00f1adir al carrito")
  )
}


function Link_c538636b0d978f0d3b4a42e1b6e388ef () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/DOBLED_SKY"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "DOBLEBSKY.png" }), ({  })))], [_e], ({  })))),src:"DOBLEBSKY.png"},)))
  )
}


function Button_509938eda9974198c264cc98cb2dd2d9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_1ba4580eacc334edad726fc81780fd86 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "DOBLED SKY", ["imagen"] : "DOBLEBSKY.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_1ba4580eacc334edad726fc81780fd86},"A\u00f1adir al carrito")
  )
}


function Link_c31ac765fc19d203e512eedb55d319df () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/JORDAN_1_MID_BROWN"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "JORDAN1MIDBROWN.png" }), ({  })))], [_e], ({  })))),src:"JORDAN1MIDBROWN.png"},)))
  )
}


function Button_7ac9427ae039a02e010dbec5fecd1233 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9237de90c481215f27ae59f37015ebf4 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "JORDAN 1 MID BROWN", ["imagen"] : "JORDAN1MIDBROWN.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_9237de90c481215f27ae59f37015ebf4},"A\u00f1adir al carrito")
  )
}


function Link_b73954e9f960a8ca3be3e302db861fe8 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/SAMBA_XLG"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "SAMBAXLGG.png" }), ({  })))], [_e], ({  })))),src:"SAMBAXLGG.png"},)))
  )
}


function Button_3d2b3b15d9500572543da81260f79b7f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_805e21fe27d5a308915c8379799dbc51 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SAMBA XLG", ["imagen"] : "SAMBAXLGG.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_805e21fe27d5a308915c8379799dbc51},"A\u00f1adir al carrito")
  )
}


function Link_e7a14217b12e4406b7a0ead3c6902d93 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/NEW_BALANCE_9060"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "NEWBALANCE9060.png" }), ({  })))], [_e], ({  })))),src:"NEWBALANCE9060.png"},)))
  )
}


function Button_e5dea65a2e8a1d99035225245d159f01 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_7901d46fb53e2ef9b44b1e1c3b1a3359 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "NEW BALANCE 9060", ["imagen"] : "NEWBALANCE9060.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_7901d46fb53e2ef9b44b1e1c3b1a3359},"A\u00f1adir al carrito")
  )
}


function Link_bf082bc9ee4e808d498e322703775a2b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/FORUM_LOW_871"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "FORUMLOW871.png" }), ({  })))], [_e], ({  })))),src:"FORUMLOW871.png"},)))
  )
}


function Button_57245abbe002c03ae9adbdae470ffc58 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_fc4ffb71841b7ebb7f64d4cc89a23b5d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "FORUM LOW 871", ["imagen"] : "FORUMLOW871.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_fc4ffb71841b7ebb7f64d4cc89a23b5d},"A\u00f1adir al carrito")
  )
}


function Link_d9efd111bece4b248205d82414dd50f5 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/CAMPUS_X_BAD_BUNNY"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "CAMPUSXBADBUNNYY.png" }), ({  })))], [_e], ({  })))),src:"CAMPUSXBADBUNNYY.png"},)))
  )
}


function Button_d26dd2f09510746d418691991c7579cb () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_e9bba2bc3d58c2bfa3a21777055eab2b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CAMPUS X BAD BUNNY", ["imagen"] : "CAMPUSXBADBUNNYY.png", ["precio"] : "$72.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_e9bba2bc3d58c2bfa3a21777055eab2b},"A\u00f1adir al carrito")
  )
}


function Link_67b4b91ec58f559f827973e02f64cf22 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/SAMBA_869"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "SAMBA869.png" }), ({  })))], [_e], ({  })))),src:"SAMBA869.png"},)))
  )
}


function Button_c580f06b0fa2ceda0f366be0c7099486 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_e9f583ef8a5b5abbb414bc32faa02ff2 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SAMBA 869", ["imagen"] : "SAMBA869.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_e9f583ef8a5b5abbb414bc32faa02ff2},"A\u00f1adir al carrito")
  )
}


function Link_febaf1a311b56ab6e7e82fdb27804f42 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/DROP_STEP_LOW_853"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "DROPSTEPLOW854.png" }), ({  })))], [_e], ({  })))),src:"DROPSTEPLOW854.png"},)))
  )
}


function Button_d98b49ceaf7ba2e0adb42a415be20739 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_5ef98584047619672a8affad4f2b1449 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "DROP STEP LOW 853", ["imagen"] : "DROPSTEPLOW854.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_5ef98584047619672a8affad4f2b1449},"A\u00f1adir al carrito")
  )
}


function Link_07144b36bbb06055bdb9afe91ee5136e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/OSIRIS_870"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "OSIRIS870.png" }), ({  })))], [_e], ({  })))),src:"OSIRIS870.png"},)))
  )
}


function Button_4e6dd2f8ec73f5da6e3abdd327eb251e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_4ccde122dd246540fe29005c47dd51e8 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "OSIRIS 870", ["imagen"] : "OSIRIS870.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_4ccde122dd246540fe29005c47dd51e8},"A\u00f1adir al carrito")
  )
}


function Link_519a2490ecf3e8c95324433f524145ff () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/JORDAN_1_821"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "JORDAN1821.png" }), ({  })))], [_e], ({  })))),src:"JORDAN1821.png"},)))
  )
}


function Button_1dddb650d89492ceb7652e238ca5ba07 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_59a110bfa3308b37d245143cbdc6d129 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "JORDAN 1 #821", ["imagen"] : "JORDAN1821.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_59a110bfa3308b37d245143cbdc6d129},"A\u00f1adir al carrito")
  )
}


function Link_7f70f57407456c863e1b2c62b3520022 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/ADIDAS_FORUM_LOW_446"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "ADIDASFORUMLOW446.png" }), ({  })))], [_e], ({  })))),src:"ADIDASFORUMLOW446.png"},)))
  )
}


function Button_2eac9a02c408a3e54d39d1f79e573722 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_5da22c32f76608ff00ceaf00dd16346d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "ADIDAS FORUM LOW 446", ["imagen"] : "ADIDASFORUMLOW446.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_5da22c32f76608ff00ceaf00dd16346d},"A\u00f1adir al carrito")
  )
}


function Link_925d516c97fdea68902bad9d4d17d8c0 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/JORDAN_1_LOW_TRAVIS_SCOTT_REVERSE"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "JORDAN1LOWTRAVISSCOTTREVERSE.png" }), ({  })))], [_e], ({  })))),src:"JORDAN1LOWTRAVISSCOTTREVERSE.png"},)))
  )
}


function Button_ac8712c0f5d9a38568a0d84ad0ad0d59 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_8fa1a564fe15b9483ccf1e327545d910 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "JORDAN 1 LOW TRAVIS SCOTT REVERSE", ["imagen"] : "JORDAN1LOWTRAVISSCOTTREVERSE.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_8fa1a564fe15b9483ccf1e327545d910},"A\u00f1adir al carrito")
  )
}


function Link_02e4e6f81ab83ed8d1df97310b62aa23 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/NEW_BALANCE_550"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "NEWBALANCE550.png" }), ({  })))], [_e], ({  })))),src:"NEWBALANCE550.png"},)))
  )
}


function Button_47cb445c1560b79ac3fa74a706daa258 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_494791295a339fbff0631596c855d533 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "NEW BALANCE 550", ["imagen"] : "NEWBALANCE550.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_494791295a339fbff0631596c855d533},"A\u00f1adir al carrito")
  )
}


function Link_75fb08e4a94ddef553a950f81422880b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/NEW_BALANCE_60"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "NEWBALANCE60.png" }), ({  })))], [_e], ({  })))),src:"NEWBALANCE60.png"},)))
  )
}


function Button_9b126e70519623efc7a79d4473c841e3 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b979414a4b661c5d0678b246c27bcd25 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "NEW BALANCE 60", ["imagen"] : "NEWBALANCE60.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_b979414a4b661c5d0678b246c27bcd25},"A\u00f1adir al carrito")
  )
}


function Iconbutton_3d0a9a80a8df2371c6cae4d55e8feb87 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_7fdf40d1985dda2bfeb449e46ae75726 = useCallback(((_e) => (addEvents([(ReflexEvent("_call_script", ({ ["javascript_code"] : "\n                const container = document.getElementById('promos');\n                if (container) container.scrollBy({left: -300, behavior: 'smooth'});\n                ", ["callback"] : null }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{css:({ ["padding"] : "6px", ["background"] : "white", ["border"] : "1px solid #ccc", ["borderRadius"] : "50%", ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }), ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }) }),onClick:on_click_7fdf40d1985dda2bfeb449e46ae75726},jsx(LucideChevronLeft,{size:28},))
  )
}


function Link_af77ecab48d67ff6c821b5b8f6c31d93 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2cc76097c5988b8f2f6170122d53b19b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_for_detail", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["args"] : ["sb-dunk-low-premium-00494.png", "SB DUNK LOW PREMIUN 00494 ", "$40.000,00"], ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),onClick:on_click_2cc76097c5988b8f2f6170122d53b19b},jsx(ReactRouterLink,{to:"/detalle/SB_DUNK_LOW_PREMIUN_00494_"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"sb-dunk-low-premium-00494.png"},)))
  )
}


function Button_0159a8cc5a29d9db3f271cba22210c4e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_283303bec2be266066ec56918d0c4f1b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SB DUNK LOW PREMIUN 00494 ", ["imagen"] : "sb-dunk-low-premium-00494.png", ["precio"] : "$40.000,00" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_283303bec2be266066ec56918d0c4f1b},"A\u00f1adir al carrito")
  )
}


function Link_f4e1b0b802e7f2a06ed50f30f0814bd7 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2cc76097c5988b8f2f6170122d53b19b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_for_detail", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["args"] : ["vans-classic-sin-plataforma-nacionales-107.png", "VANS CLASSIC (SIN PLATAFORMA) NACIONALES", "$40.000,00"], ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),onClick:on_click_2cc76097c5988b8f2f6170122d53b19b},jsx(ReactRouterLink,{to:"/detalle/VANS_CLASSIC_(SIN_PLATAFORMA)_NACIONALES"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"vans-classic-sin-plataforma-nacionales-107.png"},)))
  )
}


function Button_b3d89c7be6e141f44ac2da746ee461f9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_ab4bad8d4863281f7f0a65d1a5fe7620 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "VANS CLASSIC (SIN PLATAFORMA) NACIONALES", ["imagen"] : "vans-classic-sin-plataforma-nacionales-107.png", ["precio"] : "$40.000,00" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_ab4bad8d4863281f7f0a65d1a5fe7620},"A\u00f1adir al carrito")
  )
}


function Link_6732ac2c5f4c3269dc28663116c4444f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2cc76097c5988b8f2f6170122d53b19b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_for_detail", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["args"] : ["converse-all-star-718.png", "CONVERSE ALL STAR 718", "$49.000"], ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),onClick:on_click_2cc76097c5988b8f2f6170122d53b19b},jsx(ReactRouterLink,{to:"/detalle/CONVERSE_ALL_STAR_718"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"converse-all-star-718.png"},)))
  )
}


function Button_367d8869092866a44372099dd8a9c05d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2b5c5159456b7f6b71a7e6aeab422cf9 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CONVERSE ALL STAR 718", ["imagen"] : "converse-all-star-718.png", ["precio"] : "$49.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_2b5c5159456b7f6b71a7e6aeab422cf9},"A\u00f1adir al carrito")
  )
}


function Link_407671f8309a970c2f6193122fc728df () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2cc76097c5988b8f2f6170122d53b19b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_for_detail", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["args"] : ["sb-dunk-low-pro-panda-premium-426.png", "SB DUNK LOW PRO PANDA PREMIUN 426", "$56.000"], ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),onClick:on_click_2cc76097c5988b8f2f6170122d53b19b},jsx(ReactRouterLink,{to:"/detalle/SB_DUNK_LOW_PRO_PANDA_PREMIUN_426"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"sb-dunk-low-pro-panda-premium-426.png"},)))
  )
}


function Button_90f99644de8c22b692cefaf4de127567 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_5fb53bd72a291de07c235a86defd9614 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SB DUNK LOW PRO PANDA PREMIUN 426", ["imagen"] : "sb-dunk-low-pro-panda-premium-426.png", ["precio"] : "$56.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_5fb53bd72a291de07c235a86defd9614},"A\u00f1adir al carrito")
  )
}


function Link_59395ead4d239598408692155c41c666 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2cc76097c5988b8f2f6170122d53b19b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_for_detail", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["args"] : ["sb-dunk-low-premium2.png", "SB DUNK LOW PREMIUN 2", "$63.000"], ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),onClick:on_click_2cc76097c5988b8f2f6170122d53b19b},jsx(ReactRouterLink,{to:"/detalle/SB_DUNK_LOW_PREMIUN_2"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"sb-dunk-low-premium2.png"},)))
  )
}


function Button_59849b602ce6a582bcadfc88e1d7f02a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_d84fa981d239410989b39266220e3905 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SB DUNK LOW PREMIUN 2", ["imagen"] : "sb-dunk-low-premium2.png", ["precio"] : "$63.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_d84fa981d239410989b39266220e3905},"A\u00f1adir al carrito")
  )
}


function Link_fa1f9de75be734b7aa5b6076d6d7b203 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2cc76097c5988b8f2f6170122d53b19b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_for_detail", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["args"] : ["converse-all-star-716.png", "CONVERSE ALL STAR 716", "$56.000,00"], ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),onClick:on_click_2cc76097c5988b8f2f6170122d53b19b},jsx(ReactRouterLink,{to:"/detalle/CONVERSE_ALL_STAR_716"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"converse-all-star-716.png"},)))
  )
}


function Button_134654ab23892339db70d2cc38f3fb9e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_3f2b54670b15b3be8ff01e36cf917f97 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CONVERSE ALL STAR 716", ["imagen"] : "converse-all-star-716.png", ["precio"] : "$56.000,00" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_3f2b54670b15b3be8ff01e36cf917f97},"A\u00f1adir al carrito")
  )
}


function Link_e91bb141e4720b89e76ce84b66c3a6df () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2cc76097c5988b8f2f6170122d53b19b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_for_detail", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["args"] : ["vans-bota-sk8-nacionales-102.png", "VANS BOTA SK8 NACIONALES 102", "$44.000,00"], ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),onClick:on_click_2cc76097c5988b8f2f6170122d53b19b},jsx(ReactRouterLink,{to:"/detalle/VANS_BOTA_SK8_NACIONALES_102"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"vans-bota-sk8-nacionales-102.png"},)))
  )
}


function Button_3a29cab5036c89a67f28a4da1caa1889 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_c4201e5c72d2e94b0020365d2841446b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "VANS BOTA SK8 NACIONALES 102", ["imagen"] : "vans-bota-sk8-nacionales-102.png", ["precio"] : "$44.000,00" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_c4201e5c72d2e94b0020365d2841446b},"A\u00f1adir al carrito")
  )
}


function Iconbutton_0efccda6fc310c1e83f6e51cec5e3014 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_509bd69998f5255c405f8adb998c0131 = useCallback(((_e) => (addEvents([(ReflexEvent("_call_script", ({ ["javascript_code"] : "\n                const container = document.getElementById('promos');\n                if (container) container.scrollBy({left: 300, behavior: 'smooth'});\n                ", ["callback"] : null }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{css:({ ["padding"] : "6px", ["background"] : "white", ["border"] : "1px solid #ccc", ["borderRadius"] : "50%", ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }), ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }) }),onClick:on_click_509bd69998f5255c405f8adb998c0131},jsx(LucideChevronRight,{size:28},))
  )
}


function Box_a3fede3d3658fc4fd3a5e8737b055e49 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_3defe7c3ef44304d1a594bddf3e6a3c7 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["top"] : "0", ["left"] : "0", ["width"] : "100%", ["height"] : "100%", ["background"] : "rgba(0, 0, 0, 0.5)", ["zIndex"] : "1000", ["transition"] : "opacity 0.3s ease-in-out" }),onClick:on_click_3defe7c3ef44304d1a594bddf3e6a3c7},)
  )
}


function Img_017edfa26c777fbda04f1f260e6c08ac () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx("img",{css:({ ["width"] : "500px", ["height"] : "400px", ["borderRadius"] : "10px", ["boxShadow"] : "0 4px 10px rgba(0,0,0,0.2)" }),src:reflex___state____state__link_bio___views___products___products____cart_state.selected_image_rx_state_},)
  )
}


function Text_580da76306873140b444c2bdb9cb3ab0 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "20px", ["fontWeight"] : "bold", ["color"] : "#333", ["marginTop"] : "10px" })},reflex___state____state__link_bio___views___products___products____cart_state.selected_product_rx_state_)
  )
}


function Text_83b2b08a65bd2dc99e4b62e219790262 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "18px", ["color"] : "#DAA520", ["fontWeight"] : "bold", ["marginBottom"] : "10px" })},reflex___state____state__link_bio___views___products___products____cart_state.formatted_selected_price_rx_state_)
  )
}


function Box_210f228d1c81f3ed66b6098bda94f8c3 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_5aa4d1b8484d5cf2275cccbda1b81710 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 38 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 38?.valueOf?.()) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 38?.valueOf?.()) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_5aa4d1b8484d5cf2275cccbda1b81710},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"38"))
  )
}


function Box_267793db3176c50f2a72009191a594df () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_bb8396725877bf6e7ba84cede0ffc7ee = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 39 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 39?.valueOf?.()) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 39?.valueOf?.()) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_bb8396725877bf6e7ba84cede0ffc7ee},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"39"))
  )
}


function Box_c2c11d78edab1ed5c162930deae31db4 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_099c041e046d15ef7533d1e369131180 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 40 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 40?.valueOf?.()) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 40?.valueOf?.()) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_099c041e046d15ef7533d1e369131180},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"40"))
  )
}


function Box_ce3662ef239df329c233070d1c0177d0 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_55f34fe0cc3031af9aa4e03cb8dfd61f = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 41 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 41?.valueOf?.()) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 41?.valueOf?.()) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_55f34fe0cc3031af9aa4e03cb8dfd61f},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"41"))
  )
}


function Box_9b58bcfbf91a38ad347a2e6402b491ec () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_4d7d639eae19c57fdad64b04d80c2fac = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 42 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 42?.valueOf?.()) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 42?.valueOf?.()) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_4d7d639eae19c57fdad64b04d80c2fac},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"42"))
  )
}


function Box_0910600fa5f33cc4031a1b87fae10f30 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_aeb589b23f02d792f1933829b246e819 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 43 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 43?.valueOf?.()) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 43?.valueOf?.()) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_aeb589b23f02d792f1933829b246e819},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"43"))
  )
}


function Debounceinput_37e33f0c5bc1ce47bfbfa2799855c1f0 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_38934ecbeb4dad1abfdc2092497b7bad = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_quantity", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "60px", ["textAlign"] : "center", ["border"] : "1px solid #ccc", ["borderRadius"] : "6px", ["background"] : "white", ["color"] : "black" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_38934ecbeb4dad1abfdc2092497b7bad,value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.quantity_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.quantity_rx_state_ : "")},)
  )
}


function Button_bafc1a67caa4bbcdaa27304978157f30 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_986bf5782effb3d8ec0185489ac15ea6 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.add_to_cart", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["fontSize"] : "18px", ["fontWeight"] : "bold", ["paddingInlineStart"] : "40px", ["paddingInlineEnd"] : "40px", ["paddingTop"] : "15px", ["paddingBottom"] : "15px", ["borderRadius"] : "10px", ["marginTop"] : "15px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["background"] : "#c49c15" }) }),onClick:on_click_986bf5782effb3d8ec0185489ac15ea6},"A\u00d1ADIR AL CARRITO")
  )
}


function Button_288229e44bdb0cd6df7db0aa9b442521 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_3defe7c3ef44304d1a594bddf3e6a3c7 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#555", ["color"] : "white", ["fontSize"] : "14px", ["borderRadius"] : "8px", ["marginTop"] : "20px", ["paddingInlineStart"] : "25px", ["paddingInlineEnd"] : "25px", ["&:hover"] : ({ ["background"] : "#333" }) }),onClick:on_click_3defe7c3ef44304d1a594bddf3e6a3c7},"Cerrar")
  )
}


function Fragment_5390e5a1036aa549b7c25f21e9a43118 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(Fragment,{},(reflex___state____state__link_bio___views___products___products____cart_state.show_modal_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["@keyframes slideDown"] : ({ ["from"] : ({ ["top"] : "-200px", ["opacity"] : "0" }), ["to"] : ({ ["top"] : "100px", ["opacity"] : "1" }) }) })},jsx(Box_a3fede3d3658fc4fd3a5e8737b055e49,{},),jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["top"] : "12px", ["right"] : "12px", ["background"] : "#DAA520", ["padding"] : "6px 10px", ["borderRadius"] : "8px", ["zIndex"] : "1002" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "white" })},"MOSTRANDO")),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "white", ["padding"] : "30px", ["borderRadius"] : "15px", ["boxShadow"] : "0 4px 15px rgba(0,0,0,0.3)", ["position"] : "fixed", ["top"] : "0", ["left"] : "50%", ["transform"] : "translateX(-50%)", ["animation"] : "slideDown 0.4s ease forwards", ["zIndex"] : "1001", ["maxHeight"] : "90vh", ["overflowY"] : "auto" })},jsx(RadixThemesBox,{css:({ ["spacing"] : "4", ["align"] : "center" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(Img_017edfa26c777fbda04f1f260e6c08ac,{},),jsx(Text_580da76306873140b444c2bdb9cb3ab0,{},),jsx(Text_83b2b08a65bd2dc99e4b62e219790262,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "10px" }),direction:"row",justify:"center",gap:"3"},jsx(Box_210f228d1c81f3ed66b6098bda94f8c3,{},),jsx(Box_267793db3176c50f2a72009191a594df,{},),jsx(Box_c2c11d78edab1ed5c162930deae31db4,{},),jsx(Box_ce3662ef239df329c233070d1c0177d0,{},),jsx(Box_9b58bcfbf91a38ad347a2e6402b491ec,{},),jsx(Box_0910600fa5f33cc4031a1b87fae10f30,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "10px" }),direction:"row",justify:"center",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["color"] : "#333" })},"Cantidad:"),jsx(Debounceinput_37e33f0c5bc1ce47bfbfa2799855c1f0,{},)),jsx(Button_bafc1a67caa4bbcdaa27304978157f30,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["fontSize"] : "14px", ["color"] : "#DAA520", ["marginTop"] : "10px", ["textDecoration"] : "none", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/detalle/{CartState.selected_product}"},"Ver m\u00e1s detalle")),jsx(Button_288229e44bdb0cd6df7db0aa9b442521,{},))))))):(jsx(Fragment,{},jsx(RadixThemesBox,{},)))))
  )
}


function Box_ce069bdd877f87668f9846e77e0f6a09 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_6178a1586ab653fa3eda648d8face8f6 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_drawer", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["top"] : "0", ["left"] : "0", ["width"] : "100%", ["height"] : "100%", ["background"] : "rgba(0,0,0,0.5)", ["zIndex"] : "1100" }),onClick:on_click_6178a1586ab653fa3eda648d8face8f6},)
  )
}


function Button_0fda5740089c4b1813d03e773b5404fd () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_6178a1586ab653fa3eda648d8face8f6 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_drawer", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "black", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:on_click_6178a1586ab653fa3eda648d8face8f6},"cerrar")
  )
}


function Flex_9a37fcfeae54cd3aee5f431efbf4726a () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"7"},Array.prototype.map.call(reflex___state____state__link_bio___views___products___products____cart_state.formatted_cart_items_rx_state_ ?? [],((item_rx_state_,i_rx_state_)=>(jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["paddingTop"] : "10px", ["paddingBottom"] : "10px", ["borderBottom"] : "1px solid #eee", ["width"] : "100%" }),direction:"row",justify:"between",key:i_rx_state_,gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx("img",{css:({ ["width"] : "70px", ["height"] : "70px", ["borderRadius"] : "10px", ["marginLeft"] : "10px" }),src:item_rx_state_?.["imagen"]},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "black" })},item_rx_state_?.["nombre"]),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["color"] : "#555" })},("Talle: "+(isTrue(item_rx_state_?.["talle"]) ? item_rx_state_?.["talle"] : "\u2014"))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["color"] : "#555" })},("Cantidad: "+item_rx_state_?.["cantidad"])))),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "0px", ["alignItems"] : "end", ["paddingRight"] : "15px" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontWeight"] : "bold", ["fontSize"] : "15px", ["marginRight"] : "8px" })},item_rx_state_?.["precio_formateado"]),jsx(RadixThemesIconButton,{color:"red",css:({ ["padding"] : "6px" }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.remove_from_cart", ({ ["index"] : i_rx_state_ }), ({  })))], [_e], ({  })))),size:"2"},jsx(LucideTrash,{size:24},)))))))))
  )
}


function Text_5cd150c78526c7b06760fb7cff02ae77 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "#000", ["marginLeft"] : "auto" })},reflex___state____state__link_bio___views___products___products____cart_state.total_text_rx_state_)
  )
}


function Text_4f43d4da5738bae7d7c430e3f23d828f () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "18px", ["color"] : "#DAA520", ["marginTop"] : "10px" })},reflex___state____state__link_bio___views___products___products____cart_state.total_text_rx_state_)
  )
}


function Button_c075221ed9af72fb7f00a1408aca32e8 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9ecb3a77ed80f5bf2b7e636042d7e21f = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.start_checkout", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "black", ["width"] : "100%", ["borderRadius"] : "8px", ["paddingTop"] : "12px", ["paddingBottom"] : "12px", ["fontWeight"] : "bold", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:on_click_9ecb3a77ed80f5bf2b7e636042d7e21f},"INICIAR COMPRA")
  )
}


function Fragment_3f44ad26ad699d315ef9bd719e914f20 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(Fragment,{},(reflex___state____state__link_bio___views___products___products____cart_state.show_cart_drawer_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{},jsx(Box_ce069bdd877f87668f9846e77e0f6a09,{},),jsx(RadixThemesBox,{css:({ ["@keyframes slideIn"] : ({ ["from"] : ({ ["right"] : "-400px" }), ["to"] : ({ ["right"] : "0" }) }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["position"] : "fixed", ["top"] : "0", ["right"] : "0", ["width"] : "400px", ["height"] : "100vh", ["background"] : "white", ["boxShadow"] : "-2px 0 10px rgba(0,0,0,0.3)", ["zIndex"] : "1200", ["animation"] : "slideIn 0.4s ease forwards" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",justify:"between",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "20px", ["color"] : "black" })},"CARRITO DE COMPRAS"),jsx(Button_0fda5740089c4b1813d03e773b5404fd,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["marginTop"] : "10px" }),direction:"row",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "bold", ["color"] : "black" })},"PRODUCTO"),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "bold", ["color"] : "black" })},"SUBTOTAL")),jsx(RadixThemesScrollArea,{css:({ ["maxHeight"] : "60vh", ["overflowY"] : "auto" })},jsx(Flex_9a37fcfeae54cd3aee5f431efbf4726a,{},)),jsx(RadixThemesBox,{css:({ ["spacing"] : "2", ["align"] : "start", ["padding"] : "20px", ["width"] : "100%" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["justifyContent"] : "between", ["alignItems"] : "center", ["marginTop"] : "15px" }),direction:"row",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "black" })},"Subtotal (sin env\u00edo):"),jsx(Text_5cd150c78526c7b06760fb7cff02ae77,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "10px" }),direction:"row",gap:"2"},jsx(LucideTruck,{css:({ ["color"] : "#000" })},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "black" })},"Medios de env\u00edo")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "8px" }),direction:"row",gap:"2"},jsx(RadixThemesTextField.Root,{css:({ ["width"] : "60%", ["borderRadius"] : "8px", ["border"] : "1px solid #ccc", ["padding"] : "5px", ["background"] : "white", ["color"] : "black" }),placeholder:"Tu c\u00f3digo postal"},),jsx(RadixThemesButton,{css:({ ["background"] : "#000", ["color"] : "#fff", ["paddingInlineStart"] : "12px", ["paddingInlineEnd"] : "12px", ["paddingTop"] : "5px", ["paddingBottom"] : "5px", ["borderRadius"] : "8px", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "#222" }) })},"CALCULAR")),jsx(RadixThemesLink,{asChild:true,css:({ ["fontSize"] : "13px", ["color"] : "#000", ["textDecoration"] : "underline", ["marginTop"] : "4px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"https://www.correoargentino.com.ar/formularios/cpa"},"No s\u00e9 mi c\u00f3digo postal")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "15px" }),direction:"row",gap:"2"},jsx(LucideStore,{css:({ ["color"] : "#000" })},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "black" })},"Nuestro local")),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #ccc", ["borderRadius"] : "10px", ["padding"] : "10px", ["marginTop"] : "5px" })},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["color"] : "#000" })},"Delta Store  Av. Circunvalaci\u00f3n Santiago Marzo Este 868 entre Argentino Valle e Independencia (Santa Rosa, La Pampa) \u2013 Lunes a Viernes 9:30 a 12:30 / 16:00 a 21:00 \u2013 S\u00e1bado 11 a 19 hs"),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "black", ["marginTop"] : "4px" })},"Gratis")),jsx(Text_4f43d4da5738bae7d7c430e3f23d828f,{},),jsx(Button_c075221ed9af72fb7f00a1408aca32e8,{},)))),jsx(RadixThemesBox,{},)))):(jsx(Fragment,{},))))
  )
}


export default function Component() {
const ref_promos = useRef(null); refs["ref_promos"] = ref_promos;




  return (
    jsx(Fragment,{},jsx(Fragment,{},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["paddingTop"] : "60px", ["paddingBottom"] : "60px", ["width"] : "100%", ["rowGap"] : "40px", ["background"] : "white" }),direction:"column",justify:"center",gap:"3",wrap:"wrap"},jsx(RadixThemesBox,{},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["@media screen and (min-width: 0)"] : ({ ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingInlineStart"] : "50px", ["paddingInlineEnd"] : "50px" }), ["height"] : "auto", ["background"] : "white" }),direction:"row",justify:"start",gap:"4",wrap:"wrap"},jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["width"] : "100%" }),direction:"row",justify:"center",gap:"1"},jsx(RadixThemesTextField.Root,{css:({ ["width"] : "250px", ["borderRadius"] : "10px", ["borderColor"] : "transparent", ["background"] : "#DAA520", ["&:placeholder"] : ({ ["color"] : "black" }), ["&:focus"] : ({ ["borderColor"] : "transparent", ["boxShadow"] : "0 0 0 2px #555" }), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "black" }) }),placeholder:"Buscar",size:"3"},),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["color"] : "black", ["border"] : "1px solid #ccc", ["borderLeft"] : "none", ["borderRadius"] : "0px 5px 5px 0px", ["height"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["&:hover"] : ({ ["background"] : "#444", ["color"] : "black" }) })},jsx(LucideSearch,{},))),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Fragment,{},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["alignItems"] : "center", ["@media screen and (min-width: 0)"] : ({ ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingInlineStart"] : "40px", ["paddingInlineEnd"] : "40px" }), ["paddingTop"] : "20px", ["paddingBottom"] : "20px", ["width"] : "100%" }),direction:"column",justify:"center",gap:"2"},jsx(RadixThemesFlex,{align:"center",css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" }),justify:"center"},jsx(Button_95b1c403e9214672526dbb2617fcf046,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["width"] : "100%" }),direction:"row",justify:"center",gap:"2"},jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "10px", ["textDecoration"] : "none", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/register"},"CREAR CUENTA")),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black", ["fontSize"] : "10px" })},"|"),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "10px", ["textDecoration"] : "none", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/login"},"INICIAR SESI\u00d3N"))))))),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["position"] : "sticky", ["top"] : "0", ["zIndex"] : "10", ["boxShadow"] : "0 2px 5px rgba(0,0,0,0.2)" })},jsx(RadixThemesText,{as:"p",css:({ ["@media screen and (min-width: 0)"] : ({ ["fontSize"] : "20px" }), ["@media screen and (min-width: 30em)"] : ({ ["fontSize"] : "28px" }), ["fontWeight"] : "bold", ["color"] : "black", ["textAlign"] : "center", ["marginTop"] : "10px", ["marginBottom"] : "10px", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px" })},"Nuestros Productos - Zapatillas")),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["backgroundColor"] : "#DAA520", ["@media screen and (min-width: 0)"] : ({ ["width"] : "90%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "60%" }), ["@media screen and (min-width: 48em)"] : ({ ["width"] : "40%" }), ["paddingTop"] : "1em", ["paddingBottom"] : "1em", ["borderBottom"] : "2px solid white", ["borderRadius"] : "12px", ["marginTop"] : "20px", ["boxShadow"] : "0px 0px 10px rgba(0,0,0,0.3)", ["fontWeight"] : "bold" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",justify:"center",gap:"4"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontWeight"] : "bold", ["paddingInlineStart"] : "1em", ["paddingInlineEnd"] : "1em", ["paddingTop"] : "0.5em", ["paddingBottom"] : "0.5em", ["&:hover"] : ({ ["backgroundColor"] : "#444", ["cursor"] : "pointer" }) })},"INICIO"))),jsx(RadixThemesDropdownMenu.Root,{},jsx(RadixThemesDropdownMenu.Trigger,{},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontWeight"] : "bold", ["paddingInlineStart"] : "1em", ["paddingInlineEnd"] : "1em", ["paddingTop"] : "0.5em", ["paddingBottom"] : "0.5em", ["&:hover"] : ({ ["backgroundColor"] : "#444", ["cursor"] : "pointer" }) })},"PRODUCTOS")),jsx(RadixThemesDropdownMenu.Content,{css:({ ["background"] : "#DAA520", ["border"] : "none", ["minWidth"] : "220px" })},jsx(RadixThemesDropdownMenu.Item,{css:({ ["color"] : "white", ["backgroundColor"] : "#DAA520", ["&:hover"] : ({ ["backgroundColor"] : "#444", ["cursor"] : "pointer" }) })},"ZAPATILLAS - RUNNING"),jsx(RadixThemesDropdownMenu.Item,{css:({ ["color"] : "white", ["backgroundColor"] : "#DAA520", ["&:hover"] : ({ ["backgroundColor"] : "#444", ["cursor"] : "pointer" }) })},"ZAPATILLAS - URBANAS"),jsx(RadixThemesDropdownMenu.Item,{css:({ ["color"] : "white", ["backgroundColor"] : "#DAA520", ["&:hover"] : ({ ["backgroundColor"] : "#444", ["cursor"] : "pointer" }) })},"IMPORTADAS"),jsx(RadixThemesDropdownMenu.Item,{css:({ ["color"] : "white", ["backgroundColor"] : "#DAA520", ["&:hover"] : ({ ["backgroundColor"] : "#444", ["cursor"] : "pointer" }) })},"NACIONALES"),jsx(RadixThemesDropdownMenu.Item,{css:({ ["color"] : "white", ["backgroundColor"] : "#DAA520", ["&:hover"] : ({ ["backgroundColor"] : "#444", ["cursor"] : "pointer" }) })},"DEPORTIVAS"))),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"https://wa.me/543794258727?text=Hola%20Delta%20Store%20\ud83d\udc4b%2C%20quiero%20consultar%20por%20unas%20zapatillas."},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontWeight"] : "bold", ["paddingInlineStart"] : "1em", ["paddingInlineEnd"] : "1em", ["paddingTop"] : "0.5em", ["paddingBottom"] : "0.5em", ["&:hover"] : ({ ["backgroundColor"] : "#444", ["cursor"] : "pointer" }) })},"CONTACTO")))))),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx("img",{css:({ ["marginTop"] : "50px", ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "auto" }) }),src:"delta.png"},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx("img",{css:({ ["marginTop"] : "50px", ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "auto" }) }),src:"cambio.png"},))),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",justify:"center",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/"},jsx(RadixThemesButton,{css:({ ["fontSize"] : "16px", ["color"] : "white", ["borderRadius"] : "30px", ["fontWeight"] : "bold", ["background"] : "#DAA520", ["marginTop"] : "100px", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) })},"VOLVER")))),jsx(RadixThemesFlex,{align:"start",css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["rowGap"] : "5px", ["width"] : "100%", ["paddingTop"] : "70px", ["paddingBottom"] : "70px" }),justify:"center",gap:"2",wrap:"wrap"},jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_ced603e9ab49e4ecb79b26417cd1aedf,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"VANS KNU SKOOL #793"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$50.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$60.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_7434cbfae0583ed2f463c9b795f3615c,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_6f7b5bfda28fe0315940b51e764a752e,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"VANS U HYLANE"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$80.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$60.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_09b4c0125a769a0637199e30fc90a529,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_aa488cd73c06292f47d9870b61c510c2,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"PUMA 180"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_d8585f4e084d86dfeaa06226e09af640,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_32d67b4fe16308729a60433d9fda5ddd,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"SAMBA XLG"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$80.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$60.000 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_ff42ecd5c334d67145c2483fff0e272b,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_1fd9fb4c4cc820ad03ee9056a62eab8d,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"AIR FORCE"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$80.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$60.000 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_b085bdd68e423f73565e869315687a09,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_730c46ab55881d1f2aefed65dee8d539,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"CAMPUS X BAD BUNNY"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_b643572ed07650afa2a3899007dd575f,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_161d31e119164163148df1215a90dc8e,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })}," SAMBA #795"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$80.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_32bbfff01b78cd406560fddd2378e5bd,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_ef45bfd03381a28b4036a933813d13bf,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })}," DOBLEB DARK #669"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_8480ca9b188cc056e4e198a986ac2724,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_afc6270a7f685006d209ba5fde432a92,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"ADI 2000"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$63.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_4036d6c2d410bc91d015e2bd70f6783c,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_c6c317afd701191ae51351e7dc3ba619,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"CAMPUS X BADBUNNY #783 "),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_5c1d983f1668540d7f8935a58cce480c,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_eba1fbf3adf5973df89b7498e325efb6,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })}," SB DUNK #778"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_c765c5d4f3f45877c53ec48b9ff4cf67,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_5e0d5f7f4d463f5f1aaa773ba3536505,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })}," JORDAN 1 #823"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_817912f4e5e0a0a9a5f835384dcedc78,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_44130eeeadef7200be773ec78457f3f5,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"CASUAL DOBLEB COCOA #841"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_7da6dec74075bebe4331f92e1e05b163,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_185759fca976f7ff8d48b7cc53dfc0d0,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"ADIDAS ZORMILLEN #841"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_69e933e1891a8cf467fda210a15f05a6,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_42824cd8509b438f15b424e0901a3a62,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })}," CONVERSE ALL STAR #717"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_4018f2a4d56502a59f6447e52634ccd2,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_8ca22e90cf117b650b1b3298e81f19c3,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"SB DUNK LOW #798 "),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_3377a6946514b93904521734a4ed5070,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_5f73bb696052c3848f4df72746898829,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"VANS KNU SKOOL #676"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_672a8439e01dd3aa344f6164aec1a450,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_c241d947d34d4116cf2a2b641e6697bd,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"JORDAN 1 LOW X TRAVIS SCOTT #769"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_95b6a61c871829836e816bbbd147d0ac,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_c538636b0d978f0d3b4a42e1b6e388ef,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"DOBLED SKY"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_509938eda9974198c264cc98cb2dd2d9,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_c31ac765fc19d203e512eedb55d319df,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"JORDAN 1 MID BROWN"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_7ac9427ae039a02e010dbec5fecd1233,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_b73954e9f960a8ca3be3e302db861fe8,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"SAMBA XLG"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$60.000 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_3d2b3b15d9500572543da81260f79b7f,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_e7a14217b12e4406b7a0ead3c6902d93,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"NEW BALANCE 9060"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_e5dea65a2e8a1d99035225245d159f01,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_bf082bc9ee4e808d498e322703775a2b,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"FORUM LOW 871"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_57245abbe002c03ae9adbdae470ffc58,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_d9efd111bece4b248205d82414dd50f5,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"CAMPUS X BAD BUNNY"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$72.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$54.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_d26dd2f09510746d418691991c7579cb,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_67b4b91ec58f559f827973e02f64cf22,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"SAMBA 869"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_c580f06b0fa2ceda0f366be0c7099486,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_febaf1a311b56ab6e7e82fdb27804f42,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"DROP STEP LOW 853"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_d98b49ceaf7ba2e0adb42a415be20739,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_07144b36bbb06055bdb9afe91ee5136e,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"OSIRIS 870"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_4e6dd2f8ec73f5da6e3abdd327eb251e,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_519a2490ecf3e8c95324433f524145ff,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"JORDAN 1 #821"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_1dddb650d89492ceb7652e238ca5ba07,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_7f70f57407456c863e1b2c62b3520022,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"ADIDAS FORUM LOW 446"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_2eac9a02c408a3e54d39d1f79e573722,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_925d516c97fdea68902bad9d4d17d8c0,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"JORDAN 1 LOW TRAVIS SCOTT REVERSE"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_ac8712c0f5d9a38568a0d84ad0ad0d59,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_02e4e6f81ab83ed8d1df97310b62aa23,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"NEW BALANCE 550"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_47cb445c1560b79ac3fa74a706daa258,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_75fb08e4a94ddef553a950f81422880b,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"NEW BALANCE 60"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_9b126e70519623efc7a79d4473c841e3,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},)))),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["marginBottom"] : "50px" })},jsx(RadixThemesButton,{css:({ ["background"] : "black", ["color"] : "white", ["borderRadius"] : "5px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["paddingTop"] : "10px", ["paddingBottom"] : "10px", ["&:hover"] : ({ ["background"] : "#444" }), ["marginTop"] : "20px" })},"Mostrar m\u00e1s productos")),jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["justify"] : "center", ["align"] : "center" })},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "22px", ["fontWeight"] : "bold", ["color"] : "#DAA520", ["marginTop"] : "50px", ["marginBottom"] : "20px", ["textAlign"] : "center" })},"\ud83d\udecd\ufe0f Productos en Promoci\u00f3n"),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["marginBottom"] : "60px" }),direction:"row",justify:"center",gap:"4"},jsx(Iconbutton_3d0a9a80a8df2371c6cae4d55e8feb87,{},),jsx(RadixThemesScrollArea,{css:({ ["width"] : "80%", ["overflowX"] : "hidden", ["whiteSpace"] : "nowrap", ["scrollBehavior"] : "smooth", ["sx"] : ({ ["&::-webkit-scrollbar"] : ({ ["height"] : "8px" }), ["&::-webkit-scrollbar-thumb"] : ({ ["background"] : "#DAA520", ["borderRadius"] : "10px" }), ["&::-webkit-scrollbar-thumb:hover"] : ({ ["background"] : "#b8860b" }), ["&::-webkit-scrollbar-track"] : ({ ["background"] : "#DAA520" }) }) }),id:"promos",ref:ref_promos},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"5"},jsx(RadixThemesBox,{css:({ ["background"] : "white", ["borderRadius"] : "15px", ["boxShadow"] : "0 2px 10px rgba(0,0,0,0.1)", ["padding"] : "15px", ["marginInlineStart"] : "10px", ["marginInlineEnd"] : "10px", ["minWidth"] : "220px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_af77ecab48d67ff6c821b5b8f6c31d93,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "14px", ["color"] : "black" })},"SB DUNK LOW PREMIUN 00494 "),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["color"] : "#DAA520", ["fontWeight"] : "bold" })},"$40.000,00"),jsx(Button_0159a8cc5a29d9db3f271cba22210c4e,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "13px", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/detalle/SB_DUNK_LOW_PREMIUN_00494_"},"Ver m\u00e1s detalle")))),jsx(RadixThemesBox,{css:({ ["background"] : "white", ["borderRadius"] : "15px", ["boxShadow"] : "0 2px 10px rgba(0,0,0,0.1)", ["padding"] : "15px", ["marginInlineStart"] : "10px", ["marginInlineEnd"] : "10px", ["minWidth"] : "220px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_f4e1b0b802e7f2a06ed50f30f0814bd7,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "14px", ["color"] : "black" })},"VANS CLASSIC (SIN PLATAFORMA) NACIONALES"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["color"] : "#DAA520", ["fontWeight"] : "bold" })},"$40.000,00"),jsx(Button_b3d89c7be6e141f44ac2da746ee461f9,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "13px", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/detalle/VANS_CLASSIC_(SIN_PLATAFORMA)_NACIONALES"},"Ver m\u00e1s detalle")))),jsx(RadixThemesBox,{css:({ ["background"] : "white", ["borderRadius"] : "15px", ["boxShadow"] : "0 2px 10px rgba(0,0,0,0.1)", ["padding"] : "15px", ["marginInlineStart"] : "10px", ["marginInlineEnd"] : "10px", ["minWidth"] : "220px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_6732ac2c5f4c3269dc28663116c4444f,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "14px", ["color"] : "black" })},"CONVERSE ALL STAR 718"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["color"] : "#DAA520", ["fontWeight"] : "bold" })},"$49.000"),jsx(Button_367d8869092866a44372099dd8a9c05d,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "13px", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/detalle/CONVERSE_ALL_STAR_718"},"Ver m\u00e1s detalle")))),jsx(RadixThemesBox,{css:({ ["background"] : "white", ["borderRadius"] : "15px", ["boxShadow"] : "0 2px 10px rgba(0,0,0,0.1)", ["padding"] : "15px", ["marginInlineStart"] : "10px", ["marginInlineEnd"] : "10px", ["minWidth"] : "220px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_407671f8309a970c2f6193122fc728df,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "14px", ["color"] : "black" })},"SB DUNK LOW PRO PANDA PREMIUN 426"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["color"] : "#DAA520", ["fontWeight"] : "bold" })},"$56.000"),jsx(Button_90f99644de8c22b692cefaf4de127567,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "13px", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/detalle/SB_DUNK_LOW_PRO_PANDA_PREMIUN_426"},"Ver m\u00e1s detalle")))),jsx(RadixThemesBox,{css:({ ["background"] : "white", ["borderRadius"] : "15px", ["boxShadow"] : "0 2px 10px rgba(0,0,0,0.1)", ["padding"] : "15px", ["marginInlineStart"] : "10px", ["marginInlineEnd"] : "10px", ["minWidth"] : "220px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_59395ead4d239598408692155c41c666,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "14px", ["color"] : "black" })},"SB DUNK LOW PREMIUN 2"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["color"] : "#DAA520", ["fontWeight"] : "bold" })},"$63.000"),jsx(Button_59849b602ce6a582bcadfc88e1d7f02a,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "13px", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/detalle/SB_DUNK_LOW_PREMIUN_2"},"Ver m\u00e1s detalle")))),jsx(RadixThemesBox,{css:({ ["background"] : "white", ["borderRadius"] : "15px", ["boxShadow"] : "0 2px 10px rgba(0,0,0,0.1)", ["padding"] : "15px", ["marginInlineStart"] : "10px", ["marginInlineEnd"] : "10px", ["minWidth"] : "220px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_fa1f9de75be734b7aa5b6076d6d7b203,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "14px", ["color"] : "black" })},"CONVERSE ALL STAR 716"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["color"] : "#DAA520", ["fontWeight"] : "bold" })},"$56.000,00"),jsx(Button_134654ab23892339db70d2cc38f3fb9e,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "13px", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/detalle/CONVERSE_ALL_STAR_716"},"Ver m\u00e1s detalle")))),jsx(RadixThemesBox,{css:({ ["background"] : "white", ["borderRadius"] : "15px", ["boxShadow"] : "0 2px 10px rgba(0,0,0,0.1)", ["padding"] : "15px", ["marginInlineStart"] : "10px", ["marginInlineEnd"] : "10px", ["minWidth"] : "220px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(Link_e91bb141e4720b89e76ce84b66c3a6df,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "14px", ["color"] : "black" })},"VANS BOTA SK8 NACIONALES 102"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["color"] : "#DAA520", ["fontWeight"] : "bold" })},"$44.000,00"),jsx(Button_3a29cab5036c89a67f28a4da1caa1889,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "13px", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/detalle/VANS_BOTA_SK8_NACIONALES_102"},"Ver m\u00e1s detalle")))))),jsx(Iconbutton_0efccda6fc310c1e83f6e51cec5e3014,{},))),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "2em", ["marginBottom"] : "2em" })},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx("img",{css:({ ["marginTop"] : "30px", ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "auto" }) }),src:"delta.png"},)),jsx(RadixThemesBox,{css:({ ["width"] : "100%" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "40px", ["background"] : "black" }),direction:"row",justify:"center",gap:"3",wrap:"wrap"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontSize"] : "15px" }),weight:"bold"},"NAVEGACI\u00d3N"),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/"},"Inicio")),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/products"},"Productos")),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"https://wa.me/543794258727?text=Hola%20Delta%20Store%20\ud83d\udc4b%2C%20quiero%20consultar%20por%20unas%20zapatillas."},"Contacto"))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontSize"] : "15px" }),weight:"bold"},"MEDIOS DE PAGO"),jsx("img",{css:({ ["height"] : "100px" }),src:"/tarjetas.png"},),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "black", ["paddingBottom"] : "20px" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["color"] : "white" }),weight:"bold"},"FORMAS DE ENV\u00cdO"),jsx("img",{css:({ ["height"] : "30px" }),src:"/correoargentino@2x.png"},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "white", ["fontSize"] : "15px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),weight:"bold"},jsx(ReactRouterLink,{to:"https://www.correoargentino.com.ar/formularios/e-commerce"},"SEGUIMIENTO DE ENVIOS"))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontSize"] : "15px" }),weight:"bold"},"CONTACTANOS"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucidePhone,{css:({ ["color"] : "white" }),size:16},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white" })},"02954 806873")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideMail,{css:({ ["color"] : "white" }),size:16},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white" })},"shoesdeltastore@gmail.com")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideMapPin,{css:({ ["color"] : "white" }),size:16},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white" })},"JUNIN 868"))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontSize"] : "15px" }),weight:"bold"},"REDES SOCIALES"),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{target:(true ? "_blank" : ""),to:"https://www.instagram.com"},jsx(LucideInstagram,{css:({ ["color"] : "white" }),size:22},))),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontSize"] : "15px", ["marginTop"] : "10px" }),weight:"bold"},"NEWSLETTER"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesTextField.Root,{css:({ ["width"] : "150px", ["height"] : "35px" }),placeholder:"shoesdeltastore@gmail.com"},),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["color"] : "black" })},jsx(LucideSend,{},)))))),jsx(Fragment,{},jsx(Fragment_5390e5a1036aa549b7c25f21e9a43118,{},)),jsx(Fragment_3f44ad26ad699d315ef9bd719e914f20,{},),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "white", ["paddingTop"] : "10px", ["paddingBottom"] : "10px", ["borderTop"] : "1px solid #333", ["textAlign"] : "center" }),justify:"center"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black", ["fontSize"] : "12px" })},"COPYRIGHT DELTA STORE - 2025. TODOS LOS DERECHOS RESERVADOS")),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesText,{as:"p",css:({ ["whiteSpace"] : "nowrap", ["color"] : "black", ["fontSize"] : "12px", ["display"] : "inline" })},"DEFENSA DE LAS Y LOS CONSUMIDORES. PARA RECLAMOS ")),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "12px", ["fontWeight"] : "bold", ["textDecoration"] : "none", ["display"] : "inline", ["marginRight"] : "5px", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"https://autogestion.produccion.gob.ar/consumidores"},"INGRES\u00c1 AC\u00c1."))),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black", ["fontSize"] : "12px", ["display"] : "inline" })}," / "),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "12px", ["fontWeight"] : "bold", ["textDecoration"] : "none", ["display"] : "inline", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/arrepentimiento"},"BOT\u00d3N DE ARREPENTIMIENTO"))))),jsx("title",{},"LinkBio | Products"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}