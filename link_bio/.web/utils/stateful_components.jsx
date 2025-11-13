import {Box as RadixThemesBox,Button as RadixThemesButton,Checkbox as RadixThemesCheckbox,Container as RadixThemesContainer,Flex as RadixThemesFlex,Heading as RadixThemesHeading,IconButton as RadixThemesIconButton,Link as RadixThemesLink,ScrollArea as RadixThemesScrollArea,Separator as RadixThemesSeparator,Text as RadixThemesText,TextField as RadixThemesTextField} from "@radix-ui/themes"
import {Fragment,useCallback,useContext,useEffect} from "react"
import {ReflexEvent,isNotNullOrUndefined,isTrue} from "$/utils/state"
import ReactPlayer from "react-player"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {Banknote as LucideBanknote,Calendar as LucideCalendar,ChevronDown as LucideChevronDown,ChevronLeft as LucideChevronLeft,ChevronRight as LucideChevronRight,CreditCard as LucideCreditCard,DollarSign as LucideDollarSign,Instagram as LucideInstagram,Mail as LucideMail,MapPin as LucideMapPin,Phone as LucidePhone,Send as LucideSend,ShoppingCart as LucideShoppingCart,Store as LucideStore,Trash as LucideTrash,Truck as LucideTruck,Wallet as LucideWallet} from "lucide-react"
import {Link as ReactRouterLink} from "react-router"
import DebounceInput from "react-debounce-input"
import {jsx} from "@emotion/react"

export function Flex_e2aef5698ea709389b325489e116ab29 () {
  



  return (
    jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["overflowX"] : "auto", ["overflowY"] : "hidden", ["scrollSnapType"] : "x mandatory", ["css"] : ({ ["& > *"] : ({ ["scrollSnapAlign"] : "center" }), ["scrollBehavior"] : "smooth", ["WebkitOverflowScrolling"] : "touch", ["&::-webkit-scrollbar"] : ({ ["display"] : "none" }), ["scrollbarWidth"] : "none" }), ["width"] : "max-content", ["paddingLeft"] : "5vw", ["paddingRight"] : "5vw" }),direction:"row",justify:"start",gap:"4"},Array.prototype.map.call([({ ["tipo"] : "imagen", ["src"] : "/imagen2.jpg" }), ({ ["tipo"] : "imagen", ["src"] : "/deltastreet.jpg" }), ({ ["tipo"] : "imagen", ["src"] : "/\ud83d\udd25\ud835\udddf\ud835\uddee \ud835\uddef\ud835\uddfc\ud835\uddf9\ud835\ude00\ud835\uddf6\ud835\ude01\ud835\uddee \ud835\uddfe\ud835\ude02\ud835\uddf2 \ud835\uddfe\ud835\ude02\ud835\uddf2\ud835\uddff\ud835\uddf2\ud835\uddfa\ud835\uddfc\ud835\ude00 \ud835\ude01\ud835\uddfc\ud835\uddf1\ud835\uddfc\ud835\ude00 \ud835\uddfd\ud835\uddee\ud835\uddff\ud835\uddee  \ud835\uddee\ud835\uddff\ud835\uddff\ud835\uddee\ud835\ude00\ud835\uddee\ud835\uddff (.jpg" }), ({ ["tipo"] : "video", ["src"] : "/\ud83d\udd25\ud835\udddf\ud835\uddee \ud835\uddef\ud835\uddfc\ud835\uddf9\ud835\ude00\ud835\uddf6\ud835\ude01\ud835\uddee \ud835\uddfe\ud835\ude02\ud835\uddf2 \ud835\uddfe\ud835\ude02\ud835\uddf2\ud835\uddff\ud835\uddf2\ud835\uddfa\ud835\uddfc\ud835\ude00 \ud835\ude01\ud835\uddfc\ud835\uddf1\ud835\uddfc\ud835\ude00 \ud835\uddfd\ud835\uddee\ud835\uddff\ud835\uddee  \ud835\uddee\ud835\uddff\ud835\uddff\ud835\uddee\ud835\ude00\ud835\uddee\ud835\uddff (.mp4" })] ?? [],((item_rx_state_,index_cb7c89e1533f39f1ef1cba12cb423197)=>(jsx(Fragment,{key:index_cb7c89e1533f39f1ef1cba12cb423197},((item_rx_state_?.["tipo"]?.valueOf?.() === "imagen"?.valueOf?.())?(jsx(Fragment,{},jsx("img",{css:({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "85%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "350px" }), ["height"] : "auto", ["objectFit"] : "contain", ["borderRadius"] : "15px", ["flexShrink"] : "0", ["transition"] : "transform 0.5s ease-in-out", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),src:item_rx_state_?.["src"]},))):(jsx(Fragment,{},jsx(ReactPlayer,{controls:true,css:({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "85%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "350px" }), ["height"] : "auto", ["borderRadius"] : "15px", ["objectFit"] : "contain", ["autoPlay"] : true, ["playsInline"] : true, ["flexShrink"] : "0" }),height:null,loop:true,muted:true,src:item_rx_state_?.["src"],width:null},)))))))))
  )
}


export function Text_d3795ee4cf3dbf1a77718336c203e8f5 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p"},((reflex___state____state__link_bio___views___products___products____cart_state.total_items_rx_state_ > 0) ? ("CARRITO ("+reflex___state____state__link_bio___views___products___products____cart_state.total_items_rx_state_+")") : "CARRITO (0)"))
  )
}


export function Button_95b1c403e9214672526dbb2617fcf046 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_6178a1586ab653fa3eda648d8face8f6 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_drawer", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["@media screen and (min-width: 0)"] : ({ ["width"] : "90%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "40%" }), ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["borderRadius"] : "5px", ["&:hover"] : ({ ["background"] : "#444" }) }),onClick:on_click_6178a1586ab653fa3eda648d8face8f6,size:"3"},jsx(LucideShoppingCart,{},),jsx(Text_d3795ee4cf3dbf1a77718336c203e8f5,{},))
  )
}


export function Link_ced603e9ab49e4ecb79b26417cd1aedf () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/VANS_KNU_SKOOL_793"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "VANSKNUSKOOL.png" }), ({  })))], [_e], ({  })))),src:"VANSKNUSKOOL.png"},)))
  )
}


export function Button_7434cbfae0583ed2f463c9b795f3615c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_85df6add2435592622f29b9c7964eef5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "VANS KNU SKOOL #793", ["imagen"] : "VANSKNUSKOOL.png", ["precio"] : "$50.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_85df6add2435592622f29b9c7964eef5},"A\u00f1adir al carrito")
  )
}


export function Link_6f7b5bfda28fe0315940b51e764a752e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/VANS_U_HYLANE"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "VANSUHYLANE.png" }), ({  })))], [_e], ({  })))),src:"VANSUHYLANE.png"},)))
  )
}


export function Button_09b4c0125a769a0637199e30fc90a529 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f881872f6f06b005cc1e4061af6edb1c = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "VANS U HYLANE", ["imagen"] : "VANSUHYLANE.png", ["precio"] : "$80.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_f881872f6f06b005cc1e4061af6edb1c},"A\u00f1adir al carrito")
  )
}


export function Link_aa488cd73c06292f47d9870b61c510c2 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/PUMA_180"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "puma 180.png" }), ({  })))], [_e], ({  })))),src:"puma 180.png"},)))
  )
}


export function Button_d8585f4e084d86dfeaa06226e09af640 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_76bd0f3390f8e84cbaa912d5d8f4d092 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "PUMA 180", ["imagen"] : "puma 180.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_76bd0f3390f8e84cbaa912d5d8f4d092},"A\u00f1adir al carrito")
  )
}


export function Link_32d67b4fe16308729a60433d9fda5ddd () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/SAMBA_XLG"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "SAMBAXLG.png" }), ({  })))], [_e], ({  })))),src:"SAMBAXLG.png"},)))
  )
}


export function Button_ff42ecd5c334d67145c2483fff0e272b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_42249e4ba337e8fcb49c3b3f78f2fd61 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SAMBA XLG", ["imagen"] : "SAMBAXLG.png", ["precio"] : "$80.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_42249e4ba337e8fcb49c3b3f78f2fd61},"A\u00f1adir al carrito")
  )
}


export function Link_1fd9fb4c4cc820ad03ee9056a62eab8d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/AIR_FORCE"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "AIRFORCE.png" }), ({  })))], [_e], ({  })))),src:"AIRFORCE.png"},)))
  )
}


export function Button_b085bdd68e423f73565e869315687a09 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_777d88b31108ac76a624078baca27470 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "AIR FORCE", ["imagen"] : "AIRFORCE.png", ["precio"] : "$80.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_777d88b31108ac76a624078baca27470},"A\u00f1adir al carrito")
  )
}


export function Link_730c46ab55881d1f2aefed65dee8d539 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/CAMPUS_X_BAD_BUNNY"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "CAMPUSXBADBUNNY.png" }), ({  })))], [_e], ({  })))),src:"CAMPUSXBADBUNNY.png"},)))
  )
}


export function Button_b643572ed07650afa2a3899007dd575f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_35c77b6f4e4b654ac6dee0b46ff3d2fc = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CAMPUS X BAD BUNNY", ["imagen"] : "CAMPUSXBADBUNNY.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_35c77b6f4e4b654ac6dee0b46ff3d2fc},"A\u00f1adir al carrito")
  )
}


export function Link_161d31e119164163148df1215a90dc8e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/_SAMBA_795"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "SAMBA795.png" }), ({  })))], [_e], ({  })))),src:"SAMBA795.png"},)))
  )
}


export function Button_32bbfff01b78cd406560fddd2378e5bd () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_d6a050dbefef6cffb9146dec011dddeb = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : " SAMBA #795", ["imagen"] : "SAMBA795.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_d6a050dbefef6cffb9146dec011dddeb},"A\u00f1adir al carrito")
  )
}


export function Link_ef45bfd03381a28b4036a933813d13bf () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/_DOBLEB_DARK_669"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "DOBLEBDARK669.jpg" }), ({  })))], [_e], ({  })))),src:"DOBLEBDARK669.jpg"},)))
  )
}


export function Button_8480ca9b188cc056e4e198a986ac2724 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_edbdeb791dc053ebcccea77eaba2346b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : " DOBLEB DARK #669", ["imagen"] : "DOBLEBDARK669.jpg", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_edbdeb791dc053ebcccea77eaba2346b},"A\u00f1adir al carrito")
  )
}


export function Link_afc6270a7f685006d209ba5fde432a92 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/ADI_2000"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "ADI 2000.png" }), ({  })))], [_e], ({  })))),src:"ADI 2000.png"},)))
  )
}


export function Button_4036d6c2d410bc91d015e2bd70f6783c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_ddaa6ca574915e559a00261c8f8c8d19 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "ADI 2000", ["imagen"] : "ADI 2000.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_ddaa6ca574915e559a00261c8f8c8d19},"A\u00f1adir al carrito")
  )
}


export function Link_c6c317afd701191ae51351e7dc3ba619 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/CAMPUS_X_BADBUNNY_783_"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "CAMPUSXBADBUNNY783.png" }), ({  })))], [_e], ({  })))),src:"CAMPUSXBADBUNNY783.png"},)))
  )
}


export function Button_5c1d983f1668540d7f8935a58cce480c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_fc09f3ad1c992757b1afe5400d702b24 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CAMPUS X BADBUNNY #783 ", ["imagen"] : "CAMPUSXBADBUNNY783.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_fc09f3ad1c992757b1afe5400d702b24},"A\u00f1adir al carrito")
  )
}


export function Link_eba1fbf3adf5973df89b7498e325efb6 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/_SB_DUNK_778"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "SBDUNK778.png" }), ({  })))], [_e], ({  })))),src:"SBDUNK778.png"},)))
  )
}


export function Button_c765c5d4f3f45877c53ec48b9ff4cf67 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b625f1b90d7b58ff7c5a9685d38e9d57 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : " SB DUNK #778", ["imagen"] : "SBDUNK778.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_b625f1b90d7b58ff7c5a9685d38e9d57},"A\u00f1adir al carrito")
  )
}


export function Link_5e0d5f7f4d463f5f1aaa773ba3536505 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/_JORDAN_1_823"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "JORDAN1-823.png" }), ({  })))], [_e], ({  })))),src:"JORDAN1-823.png"},)))
  )
}


export function Button_817912f4e5e0a0a9a5f835384dcedc78 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_322353b7a7e59ecbfba0c9fc50230edf = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : " JORDAN 1 #823", ["imagen"] : "JORDAN1-823.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_322353b7a7e59ecbfba0c9fc50230edf},"A\u00f1adir al carrito")
  )
}


export function Link_44130eeeadef7200be773ec78457f3f5 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/CASUAL_DOBLEB_COCOA_841"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "CASUALDOBLEBCOCOA.png" }), ({  })))], [_e], ({  })))),src:"CASUALDOBLEBCOCOA.png"},)))
  )
}


export function Button_7da6dec74075bebe4331f92e1e05b163 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_15a89207f10f52f48a757508d869c1f3 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CASUAL DOBLEB COCOA #841", ["imagen"] : "CASUALDOBLEBCOCOA.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_15a89207f10f52f48a757508d869c1f3},"A\u00f1adir al carrito")
  )
}


export function Link_185759fca976f7ff8d48b7cc53dfc0d0 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/ADIDAS_ZORMILLEN_841"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "ADIDASORMILLEN850.png" }), ({  })))], [_e], ({  })))),src:"ADIDASORMILLEN850.png"},)))
  )
}


export function Button_69e933e1891a8cf467fda210a15f05a6 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b300cdf8ea9d0547c650957c059f3a39 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "ADIDAS ZORMILLEN #841", ["imagen"] : "ADIDASORMILLEN850.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_b300cdf8ea9d0547c650957c059f3a39},"A\u00f1adir al carrito")
  )
}


export function Link_42824cd8509b438f15b424e0901a3a62 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/_CONVERSE_ALL_STAR_717"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "CONVERSEALLSTAR717.png" }), ({  })))], [_e], ({  })))),src:"CONVERSEALLSTAR717.png"},)))
  )
}


export function Button_4018f2a4d56502a59f6447e52634ccd2 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_38cf889401381f6da467c1bc5ff55c4f = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : " CONVERSE ALL STAR #717", ["imagen"] : "CONVERSEALLSTAR717.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_38cf889401381f6da467c1bc5ff55c4f},"A\u00f1adir al carrito")
  )
}


export function Link_8ca22e90cf117b650b1b3298e81f19c3 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/SB_DUNK_LOW_798_"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "SBDUNKLOW.png" }), ({  })))], [_e], ({  })))),src:"SBDUNKLOW.png"},)))
  )
}


export function Button_3377a6946514b93904521734a4ed5070 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b932ed9a87d6baacda7e677eb5cd3472 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SB DUNK LOW #798 ", ["imagen"] : "SBDUNKLOW.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_b932ed9a87d6baacda7e677eb5cd3472},"A\u00f1adir al carrito")
  )
}


export function Link_5f73bb696052c3848f4df72746898829 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/VANS_KNU_SKOOL_676"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "VANSKNUSKOOLL.png" }), ({  })))], [_e], ({  })))),src:"VANSKNUSKOOLL.png"},)))
  )
}


export function Button_672a8439e01dd3aa344f6164aec1a450 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f49956ea6d204aa52f839cdc388c78fc = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "VANS KNU SKOOL #676", ["imagen"] : "VANSKNUSKOOLL.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_f49956ea6d204aa52f839cdc388c78fc},"A\u00f1adir al carrito")
  )
}


export function Link_c241d947d34d4116cf2a2b641e6697bd () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/JORDAN_1_LOW_X_TRAVIS_SCOTT_769"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "JORDAN1LOWXTRAVISSCOTT.png" }), ({  })))], [_e], ({  })))),src:"JORDAN1LOWXTRAVISSCOTT.png"},)))
  )
}


export function Button_95b6a61c871829836e816bbbd147d0ac () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b787633e3303ed3de4277d6ecdcde1c4 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "JORDAN 1 LOW X TRAVIS SCOTT #769", ["imagen"] : "JORDAN1LOWXTRAVISSCOTT.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_b787633e3303ed3de4277d6ecdcde1c4},"A\u00f1adir al carrito")
  )
}


export function Link_c538636b0d978f0d3b4a42e1b6e388ef () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/DOBLED_SKY"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "DOBLEBSKY.png" }), ({  })))], [_e], ({  })))),src:"DOBLEBSKY.png"},)))
  )
}


export function Button_509938eda9974198c264cc98cb2dd2d9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_1ba4580eacc334edad726fc81780fd86 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "DOBLED SKY", ["imagen"] : "DOBLEBSKY.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_1ba4580eacc334edad726fc81780fd86},"A\u00f1adir al carrito")
  )
}


export function Link_c31ac765fc19d203e512eedb55d319df () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/JORDAN_1_MID_BROWN"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "JORDAN1MIDBROWN.png" }), ({  })))], [_e], ({  })))),src:"JORDAN1MIDBROWN.png"},)))
  )
}


export function Button_7ac9427ae039a02e010dbec5fecd1233 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9237de90c481215f27ae59f37015ebf4 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "JORDAN 1 MID BROWN", ["imagen"] : "JORDAN1MIDBROWN.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_9237de90c481215f27ae59f37015ebf4},"A\u00f1adir al carrito")
  )
}


export function Link_b73954e9f960a8ca3be3e302db861fe8 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/SAMBA_XLG"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "SAMBAXLGG.png" }), ({  })))], [_e], ({  })))),src:"SAMBAXLGG.png"},)))
  )
}


export function Button_3d2b3b15d9500572543da81260f79b7f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_805e21fe27d5a308915c8379799dbc51 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SAMBA XLG", ["imagen"] : "SAMBAXLGG.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_805e21fe27d5a308915c8379799dbc51},"A\u00f1adir al carrito")
  )
}


export function Link_e7a14217b12e4406b7a0ead3c6902d93 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/NEW_BALANCE_9060"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "NEWBALANCE9060.png" }), ({  })))], [_e], ({  })))),src:"NEWBALANCE9060.png"},)))
  )
}


export function Button_e5dea65a2e8a1d99035225245d159f01 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_7901d46fb53e2ef9b44b1e1c3b1a3359 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "NEW BALANCE 9060", ["imagen"] : "NEWBALANCE9060.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_7901d46fb53e2ef9b44b1e1c3b1a3359},"A\u00f1adir al carrito")
  )
}


export function Link_bf082bc9ee4e808d498e322703775a2b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/FORUM_LOW_871"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "FORUMLOW871.png" }), ({  })))], [_e], ({  })))),src:"FORUMLOW871.png"},)))
  )
}


export function Button_57245abbe002c03ae9adbdae470ffc58 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_fc4ffb71841b7ebb7f64d4cc89a23b5d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "FORUM LOW 871", ["imagen"] : "FORUMLOW871.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_fc4ffb71841b7ebb7f64d4cc89a23b5d},"A\u00f1adir al carrito")
  )
}


export function Link_d9efd111bece4b248205d82414dd50f5 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/CAMPUS_X_BAD_BUNNY"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "CAMPUSXBADBUNNYY.png" }), ({  })))], [_e], ({  })))),src:"CAMPUSXBADBUNNYY.png"},)))
  )
}


export function Button_d26dd2f09510746d418691991c7579cb () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_e9bba2bc3d58c2bfa3a21777055eab2b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CAMPUS X BAD BUNNY", ["imagen"] : "CAMPUSXBADBUNNYY.png", ["precio"] : "$72.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_e9bba2bc3d58c2bfa3a21777055eab2b},"A\u00f1adir al carrito")
  )
}


export function Link_67b4b91ec58f559f827973e02f64cf22 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/SAMBA_869"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "SAMBA869.png" }), ({  })))], [_e], ({  })))),src:"SAMBA869.png"},)))
  )
}


export function Button_c580f06b0fa2ceda0f366be0c7099486 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_e9f583ef8a5b5abbb414bc32faa02ff2 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SAMBA 869", ["imagen"] : "SAMBA869.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_e9f583ef8a5b5abbb414bc32faa02ff2},"A\u00f1adir al carrito")
  )
}


export function Link_febaf1a311b56ab6e7e82fdb27804f42 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/DROP_STEP_LOW_853"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "DROPSTEPLOW854.png" }), ({  })))], [_e], ({  })))),src:"DROPSTEPLOW854.png"},)))
  )
}


export function Button_d98b49ceaf7ba2e0adb42a415be20739 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_5ef98584047619672a8affad4f2b1449 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "DROP STEP LOW 853", ["imagen"] : "DROPSTEPLOW854.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_5ef98584047619672a8affad4f2b1449},"A\u00f1adir al carrito")
  )
}


export function Link_07144b36bbb06055bdb9afe91ee5136e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/OSIRIS_870"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "OSIRIS870.png" }), ({  })))], [_e], ({  })))),src:"OSIRIS870.png"},)))
  )
}


export function Button_4e6dd2f8ec73f5da6e3abdd327eb251e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_4ccde122dd246540fe29005c47dd51e8 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "OSIRIS 870", ["imagen"] : "OSIRIS870.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_4ccde122dd246540fe29005c47dd51e8},"A\u00f1adir al carrito")
  )
}


export function Link_519a2490ecf3e8c95324433f524145ff () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/JORDAN_1_821"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "JORDAN1821.png" }), ({  })))], [_e], ({  })))),src:"JORDAN1821.png"},)))
  )
}


export function Button_1dddb650d89492ceb7652e238ca5ba07 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_59a110bfa3308b37d245143cbdc6d129 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "JORDAN 1 #821", ["imagen"] : "JORDAN1821.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_59a110bfa3308b37d245143cbdc6d129},"A\u00f1adir al carrito")
  )
}


export function Link_7f70f57407456c863e1b2c62b3520022 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/ADIDAS_FORUM_LOW_446"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "ADIDASFORUMLOW446.png" }), ({  })))], [_e], ({  })))),src:"ADIDASFORUMLOW446.png"},)))
  )
}


export function Button_2eac9a02c408a3e54d39d1f79e573722 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_5da22c32f76608ff00ceaf00dd16346d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "ADIDAS FORUM LOW 446", ["imagen"] : "ADIDASFORUMLOW446.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_5da22c32f76608ff00ceaf00dd16346d},"A\u00f1adir al carrito")
  )
}


export function Link_925d516c97fdea68902bad9d4d17d8c0 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/JORDAN_1_LOW_TRAVIS_SCOTT_REVERSE"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "JORDAN1LOWTRAVISSCOTTREVERSE.png" }), ({  })))], [_e], ({  })))),src:"JORDAN1LOWTRAVISSCOTTREVERSE.png"},)))
  )
}


export function Button_ac8712c0f5d9a38568a0d84ad0ad0d59 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_8fa1a564fe15b9483ccf1e327545d910 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "JORDAN 1 LOW TRAVIS SCOTT REVERSE", ["imagen"] : "JORDAN1LOWTRAVISSCOTTREVERSE.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_8fa1a564fe15b9483ccf1e327545d910},"A\u00f1adir al carrito")
  )
}


export function Link_02e4e6f81ab83ed8d1df97310b62aa23 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/NEW_BALANCE_550"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "NEWBALANCE550.png" }), ({  })))], [_e], ({  })))),src:"NEWBALANCE550.png"},)))
  )
}


export function Button_47cb445c1560b79ac3fa74a706daa258 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_494791295a339fbff0631596c855d533 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "NEW BALANCE 550", ["imagen"] : "NEWBALANCE550.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_494791295a339fbff0631596c855d533},"A\u00f1adir al carrito")
  )
}


export function Link_75fb08e4a94ddef553a950f81422880b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/NEW_BALANCE_60"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_image", ({ ["img"] : "NEWBALANCE60.png" }), ({  })))], [_e], ({  })))),src:"NEWBALANCE60.png"},)))
  )
}


export function Button_9b126e70519623efc7a79d4473c841e3 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b979414a4b661c5d0678b246c27bcd25 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "NEW BALANCE 60", ["imagen"] : "NEWBALANCE60.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_b979414a4b661c5d0678b246c27bcd25},"A\u00f1adir al carrito")
  )
}


export function Iconbutton_3d0a9a80a8df2371c6cae4d55e8feb87 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_7fdf40d1985dda2bfeb449e46ae75726 = useCallback(((_e) => (addEvents([(ReflexEvent("_call_script", ({ ["javascript_code"] : "\n                const container = document.getElementById('promos');\n                if (container) container.scrollBy({left: -300, behavior: 'smooth'});\n                ", ["callback"] : null }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{css:({ ["padding"] : "6px", ["background"] : "white", ["border"] : "1px solid #ccc", ["borderRadius"] : "50%", ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }), ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }) }),onClick:on_click_7fdf40d1985dda2bfeb449e46ae75726},jsx(LucideChevronLeft,{size:28},))
  )
}


export function Link_af77ecab48d67ff6c821b5b8f6c31d93 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2cc76097c5988b8f2f6170122d53b19b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_for_detail", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["args"] : ["sb-dunk-low-premium-00494.png", "SB DUNK LOW PREMIUN 00494 ", "$40.000,00"], ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),onClick:on_click_2cc76097c5988b8f2f6170122d53b19b},jsx(ReactRouterLink,{to:"/detalle/SB_DUNK_LOW_PREMIUN_00494_"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"sb-dunk-low-premium-00494.png"},)))
  )
}


export function Button_0159a8cc5a29d9db3f271cba22210c4e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_283303bec2be266066ec56918d0c4f1b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SB DUNK LOW PREMIUN 00494 ", ["imagen"] : "sb-dunk-low-premium-00494.png", ["precio"] : "$40.000,00" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_283303bec2be266066ec56918d0c4f1b},"A\u00f1adir al carrito")
  )
}


export function Link_f4e1b0b802e7f2a06ed50f30f0814bd7 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2cc76097c5988b8f2f6170122d53b19b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_for_detail", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["args"] : ["vans-classic-sin-plataforma-nacionales-107.png", "VANS CLASSIC (SIN PLATAFORMA) NACIONALES", "$40.000,00"], ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),onClick:on_click_2cc76097c5988b8f2f6170122d53b19b},jsx(ReactRouterLink,{to:"/detalle/VANS_CLASSIC_(SIN_PLATAFORMA)_NACIONALES"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"vans-classic-sin-plataforma-nacionales-107.png"},)))
  )
}


export function Button_b3d89c7be6e141f44ac2da746ee461f9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_ab4bad8d4863281f7f0a65d1a5fe7620 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "VANS CLASSIC (SIN PLATAFORMA) NACIONALES", ["imagen"] : "vans-classic-sin-plataforma-nacionales-107.png", ["precio"] : "$40.000,00" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_ab4bad8d4863281f7f0a65d1a5fe7620},"A\u00f1adir al carrito")
  )
}


export function Link_6732ac2c5f4c3269dc28663116c4444f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2cc76097c5988b8f2f6170122d53b19b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_for_detail", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["args"] : ["converse-all-star-718.png", "CONVERSE ALL STAR 718", "$49.000"], ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),onClick:on_click_2cc76097c5988b8f2f6170122d53b19b},jsx(ReactRouterLink,{to:"/detalle/CONVERSE_ALL_STAR_718"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"converse-all-star-718.png"},)))
  )
}


export function Button_367d8869092866a44372099dd8a9c05d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2b5c5159456b7f6b71a7e6aeab422cf9 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CONVERSE ALL STAR 718", ["imagen"] : "converse-all-star-718.png", ["precio"] : "$49.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_2b5c5159456b7f6b71a7e6aeab422cf9},"A\u00f1adir al carrito")
  )
}


export function Link_407671f8309a970c2f6193122fc728df () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2cc76097c5988b8f2f6170122d53b19b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_for_detail", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["args"] : ["sb-dunk-low-pro-panda-premium-426.png", "SB DUNK LOW PRO PANDA PREMIUN 426", "$56.000"], ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),onClick:on_click_2cc76097c5988b8f2f6170122d53b19b},jsx(ReactRouterLink,{to:"/detalle/SB_DUNK_LOW_PRO_PANDA_PREMIUN_426"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"sb-dunk-low-pro-panda-premium-426.png"},)))
  )
}


export function Button_90f99644de8c22b692cefaf4de127567 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_5fb53bd72a291de07c235a86defd9614 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SB DUNK LOW PRO PANDA PREMIUN 426", ["imagen"] : "sb-dunk-low-pro-panda-premium-426.png", ["precio"] : "$56.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_5fb53bd72a291de07c235a86defd9614},"A\u00f1adir al carrito")
  )
}


export function Link_59395ead4d239598408692155c41c666 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2cc76097c5988b8f2f6170122d53b19b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_for_detail", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["args"] : ["sb-dunk-low-premium2.png", "SB DUNK LOW PREMIUN 2", "$63.000"], ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),onClick:on_click_2cc76097c5988b8f2f6170122d53b19b},jsx(ReactRouterLink,{to:"/detalle/SB_DUNK_LOW_PREMIUN_2"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"sb-dunk-low-premium2.png"},)))
  )
}


export function Button_59849b602ce6a582bcadfc88e1d7f02a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_d84fa981d239410989b39266220e3905 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SB DUNK LOW PREMIUN 2", ["imagen"] : "sb-dunk-low-premium2.png", ["precio"] : "$63.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_d84fa981d239410989b39266220e3905},"A\u00f1adir al carrito")
  )
}


export function Link_fa1f9de75be734b7aa5b6076d6d7b203 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2cc76097c5988b8f2f6170122d53b19b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_for_detail", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["args"] : ["converse-all-star-716.png", "CONVERSE ALL STAR 716", "$56.000,00"], ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),onClick:on_click_2cc76097c5988b8f2f6170122d53b19b},jsx(ReactRouterLink,{to:"/detalle/CONVERSE_ALL_STAR_716"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"converse-all-star-716.png"},)))
  )
}


export function Button_134654ab23892339db70d2cc38f3fb9e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_3f2b54670b15b3be8ff01e36cf917f97 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CONVERSE ALL STAR 716", ["imagen"] : "converse-all-star-716.png", ["precio"] : "$56.000,00" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_3f2b54670b15b3be8ff01e36cf917f97},"A\u00f1adir al carrito")
  )
}


export function Link_e91bb141e4720b89e76ce84b66c3a6df () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2cc76097c5988b8f2f6170122d53b19b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_for_detail", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesLink,{asChild:true,css:({ ["args"] : ["vans-bota-sk8-nacionales-102.png", "VANS BOTA SK8 NACIONALES 102", "$44.000,00"], ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),onClick:on_click_2cc76097c5988b8f2f6170122d53b19b},jsx(ReactRouterLink,{to:"/detalle/VANS_BOTA_SK8_NACIONALES_102"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"vans-bota-sk8-nacionales-102.png"},)))
  )
}


export function Button_3a29cab5036c89a67f28a4da1caa1889 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_c4201e5c72d2e94b0020365d2841446b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "VANS BOTA SK8 NACIONALES 102", ["imagen"] : "vans-bota-sk8-nacionales-102.png", ["precio"] : "$44.000,00" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_c4201e5c72d2e94b0020365d2841446b},"A\u00f1adir al carrito")
  )
}


export function Iconbutton_0efccda6fc310c1e83f6e51cec5e3014 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_509bd69998f5255c405f8adb998c0131 = useCallback(((_e) => (addEvents([(ReflexEvent("_call_script", ({ ["javascript_code"] : "\n                const container = document.getElementById('promos');\n                if (container) container.scrollBy({left: 300, behavior: 'smooth'});\n                ", ["callback"] : null }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{css:({ ["padding"] : "6px", ["background"] : "white", ["border"] : "1px solid #ccc", ["borderRadius"] : "50%", ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }), ["@media screen and (min-width: 0)"] : ({ ["display"] : "none" }), ["@media screen and (min-width: 30em)"] : ({ ["display"] : "flex" }) }),onClick:on_click_509bd69998f5255c405f8adb998c0131},jsx(LucideChevronRight,{size:28},))
  )
}


export function Box_a3fede3d3658fc4fd3a5e8737b055e49 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_3defe7c3ef44304d1a594bddf3e6a3c7 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["top"] : "0", ["left"] : "0", ["width"] : "100%", ["height"] : "100%", ["background"] : "rgba(0, 0, 0, 0.5)", ["zIndex"] : "1000", ["transition"] : "opacity 0.3s ease-in-out" }),onClick:on_click_3defe7c3ef44304d1a594bddf3e6a3c7},)
  )
}


export function Img_017edfa26c777fbda04f1f260e6c08ac () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx("img",{css:({ ["width"] : "500px", ["height"] : "400px", ["borderRadius"] : "10px", ["boxShadow"] : "0 4px 10px rgba(0,0,0,0.2)" }),src:reflex___state____state__link_bio___views___products___products____cart_state.selected_image_rx_state_},)
  )
}


export function Text_580da76306873140b444c2bdb9cb3ab0 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "20px", ["fontWeight"] : "bold", ["color"] : "#333", ["marginTop"] : "10px" })},reflex___state____state__link_bio___views___products___products____cart_state.selected_product_rx_state_)
  )
}


export function Text_83b2b08a65bd2dc99e4b62e219790262 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "18px", ["color"] : "#DAA520", ["fontWeight"] : "bold", ["marginBottom"] : "10px" })},reflex___state____state__link_bio___views___products___products____cart_state.formatted_selected_price_rx_state_)
  )
}


export function Box_210f228d1c81f3ed66b6098bda94f8c3 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_5aa4d1b8484d5cf2275cccbda1b81710 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 38 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 38?.valueOf?.()) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 38?.valueOf?.()) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_5aa4d1b8484d5cf2275cccbda1b81710},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"38"))
  )
}


export function Box_267793db3176c50f2a72009191a594df () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_bb8396725877bf6e7ba84cede0ffc7ee = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 39 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 39?.valueOf?.()) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 39?.valueOf?.()) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_bb8396725877bf6e7ba84cede0ffc7ee},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"39"))
  )
}


export function Box_c2c11d78edab1ed5c162930deae31db4 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_099c041e046d15ef7533d1e369131180 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 40 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 40?.valueOf?.()) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 40?.valueOf?.()) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_099c041e046d15ef7533d1e369131180},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"40"))
  )
}


export function Box_ce3662ef239df329c233070d1c0177d0 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_55f34fe0cc3031af9aa4e03cb8dfd61f = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 41 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 41?.valueOf?.()) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 41?.valueOf?.()) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_55f34fe0cc3031af9aa4e03cb8dfd61f},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"41"))
  )
}


export function Box_9b58bcfbf91a38ad347a2e6402b491ec () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_4d7d639eae19c57fdad64b04d80c2fac = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 42 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 42?.valueOf?.()) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 42?.valueOf?.()) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_4d7d639eae19c57fdad64b04d80c2fac},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"42"))
  )
}


export function Box_0910600fa5f33cc4031a1b87fae10f30 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_aeb589b23f02d792f1933829b246e819 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 43 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 43?.valueOf?.()) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_?.valueOf?.() === 43?.valueOf?.()) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_aeb589b23f02d792f1933829b246e819},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"43"))
  )
}


export function Debounceinput_37e33f0c5bc1ce47bfbfa2799855c1f0 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_38934ecbeb4dad1abfdc2092497b7bad = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_quantity", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "60px", ["textAlign"] : "center", ["border"] : "1px solid #ccc", ["borderRadius"] : "6px", ["background"] : "white", ["color"] : "black" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_38934ecbeb4dad1abfdc2092497b7bad,value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.quantity_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.quantity_rx_state_ : "")},)
  )
}


export function Button_bafc1a67caa4bbcdaa27304978157f30 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_986bf5782effb3d8ec0185489ac15ea6 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.add_to_cart", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["fontSize"] : "18px", ["fontWeight"] : "bold", ["paddingInlineStart"] : "40px", ["paddingInlineEnd"] : "40px", ["paddingTop"] : "15px", ["paddingBottom"] : "15px", ["borderRadius"] : "10px", ["marginTop"] : "15px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["background"] : "#c49c15" }) }),onClick:on_click_986bf5782effb3d8ec0185489ac15ea6},"A\u00d1ADIR AL CARRITO")
  )
}


export function Link_091b5532f48dd0f04f5d0a8f0c51a176 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_8c8a0b9fbd0f5aa5c737ce3babcfef4c = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.go_to_detail", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesLink,{css:({ ["fontSize"] : "14px", ["color"] : "#DAA520", ["marginTop"] : "10px", ["textDecoration"] : "none", ["&:hover"] : ({ ["textDecoration"] : "underline" }) }),href:"#",onClick:on_click_8c8a0b9fbd0f5aa5c737ce3babcfef4c},"Ver m\u00e1s detalle")
  )
}


export function Button_288229e44bdb0cd6df7db0aa9b442521 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_3defe7c3ef44304d1a594bddf3e6a3c7 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#555", ["color"] : "white", ["fontSize"] : "14px", ["borderRadius"] : "8px", ["marginTop"] : "20px", ["paddingInlineStart"] : "25px", ["paddingInlineEnd"] : "25px", ["&:hover"] : ({ ["background"] : "#333" }) }),onClick:on_click_3defe7c3ef44304d1a594bddf3e6a3c7},"Cerrar")
  )
}


export function Fragment_5f3914f698c06d3c70f57ed1d2256c0f () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(Fragment,{},(reflex___state____state__link_bio___views___products___products____cart_state.show_modal_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["@keyframes slideDown"] : ({ ["from"] : ({ ["top"] : "-200px", ["opacity"] : "0" }), ["to"] : ({ ["top"] : "100px", ["opacity"] : "1" }) }) })},jsx(Box_a3fede3d3658fc4fd3a5e8737b055e49,{},),jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["top"] : "12px", ["right"] : "12px", ["background"] : "#DAA520", ["padding"] : "6px 10px", ["borderRadius"] : "8px", ["zIndex"] : "1002" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "white" })},"MOSTRANDO")),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "white", ["padding"] : "30px", ["borderRadius"] : "15px", ["boxShadow"] : "0 4px 15px rgba(0,0,0,0.3)", ["position"] : "fixed", ["top"] : "0", ["left"] : "50%", ["transform"] : "translateX(-50%)", ["animation"] : "slideDown 0.4s ease forwards", ["zIndex"] : "1001", ["maxHeight"] : "90vh", ["overflowY"] : "auto" })},jsx(RadixThemesBox,{css:({ ["spacing"] : "4", ["align"] : "center" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(Img_017edfa26c777fbda04f1f260e6c08ac,{},),jsx(Text_580da76306873140b444c2bdb9cb3ab0,{},),jsx(Text_83b2b08a65bd2dc99e4b62e219790262,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "10px" }),direction:"row",justify:"center",gap:"3"},jsx(Box_210f228d1c81f3ed66b6098bda94f8c3,{},),jsx(Box_267793db3176c50f2a72009191a594df,{},),jsx(Box_c2c11d78edab1ed5c162930deae31db4,{},),jsx(Box_ce3662ef239df329c233070d1c0177d0,{},),jsx(Box_9b58bcfbf91a38ad347a2e6402b491ec,{},),jsx(Box_0910600fa5f33cc4031a1b87fae10f30,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "10px" }),direction:"row",justify:"center",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["color"] : "#333" })},"Cantidad:"),jsx(Debounceinput_37e33f0c5bc1ce47bfbfa2799855c1f0,{},)),jsx(Button_bafc1a67caa4bbcdaa27304978157f30,{},),jsx(Link_091b5532f48dd0f04f5d0a8f0c51a176,{},),jsx(Button_288229e44bdb0cd6df7db0aa9b442521,{},))))))):(jsx(Fragment,{},jsx(RadixThemesBox,{},)))))
  )
}


export function Box_ce069bdd877f87668f9846e77e0f6a09 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_6178a1586ab653fa3eda648d8face8f6 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_drawer", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["top"] : "0", ["left"] : "0", ["width"] : "100%", ["height"] : "100%", ["background"] : "rgba(0,0,0,0.5)", ["zIndex"] : "1100" }),onClick:on_click_6178a1586ab653fa3eda648d8face8f6},)
  )
}


export function Button_0fda5740089c4b1813d03e773b5404fd () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_6178a1586ab653fa3eda648d8face8f6 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_drawer", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "black", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:on_click_6178a1586ab653fa3eda648d8face8f6},"cerrar")
  )
}


export function Flex_9a37fcfeae54cd3aee5f431efbf4726a () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"7"},Array.prototype.map.call(reflex___state____state__link_bio___views___products___products____cart_state.formatted_cart_items_rx_state_ ?? [],((item_rx_state_,i_rx_state_)=>(jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["paddingTop"] : "10px", ["paddingBottom"] : "10px", ["borderBottom"] : "1px solid #eee", ["width"] : "100%" }),direction:"row",justify:"between",key:i_rx_state_,gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx("img",{css:({ ["width"] : "70px", ["height"] : "70px", ["borderRadius"] : "10px", ["marginLeft"] : "10px" }),src:item_rx_state_?.["imagen"]},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "black" })},item_rx_state_?.["nombre"]),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["color"] : "#555" })},("Talle: "+(isTrue(item_rx_state_?.["talle"]) ? item_rx_state_?.["talle"] : "\u2014"))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["color"] : "#555" })},("Cantidad: "+item_rx_state_?.["cantidad"])))),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "0px", ["alignItems"] : "end", ["paddingRight"] : "15px" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontWeight"] : "bold", ["fontSize"] : "15px", ["marginRight"] : "8px" })},item_rx_state_?.["precio_formateado"]),jsx(RadixThemesIconButton,{color:"red",css:({ ["padding"] : "6px" }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.remove_from_cart", ({ ["index"] : i_rx_state_ }), ({  })))], [_e], ({  })))),size:"2"},jsx(LucideTrash,{size:24},)))))))))
  )
}


export function Text_5cd150c78526c7b06760fb7cff02ae77 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "#000", ["marginLeft"] : "auto" })},reflex___state____state__link_bio___views___products___products____cart_state.total_text_rx_state_)
  )
}


export function Text_4f43d4da5738bae7d7c430e3f23d828f () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "18px", ["color"] : "#DAA520", ["marginTop"] : "10px" })},reflex___state____state__link_bio___views___products___products____cart_state.total_text_rx_state_)
  )
}


export function Button_c075221ed9af72fb7f00a1408aca32e8 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9ecb3a77ed80f5bf2b7e636042d7e21f = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.start_checkout", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "black", ["width"] : "100%", ["borderRadius"] : "8px", ["paddingTop"] : "12px", ["paddingBottom"] : "12px", ["fontWeight"] : "bold", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),onClick:on_click_9ecb3a77ed80f5bf2b7e636042d7e21f},"INICIAR COMPRA")
  )
}


export function Fragment_3f44ad26ad699d315ef9bd719e914f20 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(Fragment,{},(reflex___state____state__link_bio___views___products___products____cart_state.show_cart_drawer_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{},jsx(Box_ce069bdd877f87668f9846e77e0f6a09,{},),jsx(RadixThemesBox,{css:({ ["@keyframes slideIn"] : ({ ["from"] : ({ ["right"] : "-400px" }), ["to"] : ({ ["right"] : "0" }) }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["position"] : "fixed", ["top"] : "0", ["right"] : "0", ["width"] : "400px", ["height"] : "100vh", ["background"] : "white", ["boxShadow"] : "-2px 0 10px rgba(0,0,0,0.3)", ["zIndex"] : "1200", ["animation"] : "slideIn 0.4s ease forwards" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",justify:"between",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "20px", ["color"] : "black" })},"CARRITO DE COMPRAS"),jsx(Button_0fda5740089c4b1813d03e773b5404fd,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["marginTop"] : "10px" }),direction:"row",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "bold", ["color"] : "black" })},"PRODUCTO"),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "bold", ["color"] : "black" })},"SUBTOTAL")),jsx(RadixThemesScrollArea,{css:({ ["maxHeight"] : "60vh", ["overflowY"] : "auto" })},jsx(Flex_9a37fcfeae54cd3aee5f431efbf4726a,{},)),jsx(RadixThemesBox,{css:({ ["spacing"] : "2", ["align"] : "start", ["padding"] : "20px", ["width"] : "100%" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["justifyContent"] : "between", ["alignItems"] : "center", ["marginTop"] : "15px" }),direction:"row",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "black" })},"Subtotal (sin env\u00edo):"),jsx(Text_5cd150c78526c7b06760fb7cff02ae77,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "10px" }),direction:"row",gap:"2"},jsx(LucideTruck,{css:({ ["color"] : "#000" })},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "black" })},"Medios de env\u00edo")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "8px" }),direction:"row",gap:"2"},jsx(RadixThemesTextField.Root,{css:({ ["width"] : "60%", ["borderRadius"] : "8px", ["border"] : "1px solid #ccc", ["padding"] : "5px", ["background"] : "white", ["color"] : "black" }),placeholder:"Tu c\u00f3digo postal"},),jsx(RadixThemesButton,{css:({ ["background"] : "#000", ["color"] : "#fff", ["paddingInlineStart"] : "12px", ["paddingInlineEnd"] : "12px", ["paddingTop"] : "5px", ["paddingBottom"] : "5px", ["borderRadius"] : "8px", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "#222" }) })},"CALCULAR")),jsx(RadixThemesLink,{asChild:true,css:({ ["fontSize"] : "13px", ["color"] : "#000", ["textDecoration"] : "underline", ["marginTop"] : "4px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"https://www.correoargentino.com.ar/formularios/cpa"},"No s\u00e9 mi c\u00f3digo postal")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "15px" }),direction:"row",gap:"2"},jsx(LucideStore,{css:({ ["color"] : "#000" })},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "black" })},"Nuestro local")),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #ccc", ["borderRadius"] : "10px", ["padding"] : "10px", ["marginTop"] : "5px" })},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["color"] : "#000" })},"Delta Store  Av. Circunvalaci\u00f3n Santiago Marzo Este 868 entre Argentino Valle e Independencia (Santa Rosa, La Pampa) \u2013 Lunes a Viernes 9:30 a 12:30 / 16:00 a 21:00 \u2013 S\u00e1bado 11 a 19 hs"),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "black", ["marginTop"] : "4px" })},"Gratis")),jsx(Text_4f43d4da5738bae7d7c430e3f23d828f,{},),jsx(Button_c075221ed9af72fb7f00a1408aca32e8,{},)))),jsx(RadixThemesBox,{},)))):(jsx(Fragment,{},))))
  )
}


export function Img_41cec6d539cf863018d5dfd268991bc1 () {
  const reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state)



  return (
    jsx("img",{css:({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "90%", ["height"] : "auto", ["marginBottom"] : "20px" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "450px", ["height"] : "auto", ["marginBottom"] : "0" }), ["boxShadow"] : "lg", ["borderRadius"] : "12px", ["objectFit"] : "contain" }),src:("/"+reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state.product_details_rx_state_?.["imagen"])},)
  )
}


export function Text_85101fddc85e9e02771733f002bac507 () {
  const reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["@media screen and (min-width: 0)"] : ({ ["fontSize"] : "24px" }), ["@media screen and (min-width: 30em)"] : ({ ["fontSize"] : "36px" }), ["fontWeight"] : "extrabold", ["color"] : "black" })},reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state.product_details_rx_state_?.["nombre"])
  )
}


export function Text_b7d0aca79f96003840103900ea85434f () {
  const reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["@media screen and (min-width: 0)"] : ({ ["fontSize"] : "28px" }), ["@media screen and (min-width: 30em)"] : ({ ["fontSize"] : "48px" }), ["fontWeight"] : "bold", ["color"] : "black", ["marginTop"] : "10px" })},reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state.product_details_rx_state_?.["precio"])
  )
}


export function Text_e397dbc8694b3333c2491e20d3e22de1 () {
  const reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "18px", ["fontWeight"] : "bold", ["color"] : "#DAA520" })},reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state.product_details_rx_state_?.["efectivo"])
  )
}


export function Debounceinput_65b425f75f9bff374dbad6de1b148657 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_ec8dfc78e637e0cb453c13ff5ae3d2ba = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.link_bio___views___products___detalle_page____detalle_page_state.set_quantity", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["width"] : "150px" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_ec8dfc78e637e0cb453c13ff5ae3d2ba,placeholder:"Cantidad",type:"number",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.quantity_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.quantity_rx_state_ : "")},)
  )
}


export function Button_4737b7ec553c999311c2237cf4543f54 () {
  const reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_29e8b90e779b4a7f6f59c18e81c1f63e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.link_bio___views___products___detalle_page____detalle_page_state.add_to_cart_event", ({ ["details"] : reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state.product_details_rx_state_ }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent, reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["fontWeight"] : "bold", ["width"] : "100%", ["marginTop"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.02)", ["background"] : "#C49000" }), ["isDisabled"] : (false ? true : false) }),onClick:on_click_29e8b90e779b4a7f6f59c18e81c1f63e,size:"4"},"AGREGAR AL CARRITO")
  )
}


export function Fragment_a01050be3aa030fba89472dab8388cdc () {
  const reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state)



  return (
    jsx(Fragment,{},(reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state.show_success_rx_state_?(jsx(Fragment,{},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "green", ["fontWeight"] : "bold", ["marginTop"] : "10px" })},"\u2705 Tu producto se carg\u00f3 correctamente."))):(jsx(Fragment,{},))))
  )
}


export function Fragment_46511e85c555a2f689e7ca7d2c5762c0 () {
  const reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state)



  return (
    jsx(Fragment,{},(isTrue(reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state.product_details_rx_state_)?(jsx(Fragment,{},jsx(RadixThemesContainer,{css:({ ["padding"] : "16px", ["paddingTop"] : "40px", ["paddingBottom"] : "40px", ["minHeight"] : "100vh" }),size:"3"},jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["background"] : "white", ["borderRadius"] : "16px", ["boxShadow"] : "lg", ["padding"] : "30px" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["maxWidth"] : "1100px", ["padding"] : "20px" }),direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["@media screen and (min-width: 0)"] : ({ ["marginBottom"] : "20px" }), ["@media screen and (min-width: 30em)"] : ({ ["marginBottom"] : "30px" }), ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/products"},jsx(RadixThemesButton,{css:({ ["fontSize"] : "16px", ["color"] : "white", ["background"] : "#DAA520", ["borderRadius"] : "30px", ["fontWeight"] : "bold", ["border"] : "2px solid #DAA520", ["transition"] : "all 0.2s ease-in-out", ["&:hover"] : ({ ["background"] : "#C49000", ["transform"] : "scale(1.05)" }) })},"\u00ab Volver a Productos"))),jsx(RadixThemesFlex,{align:"start",justify:"center",gap:"5"},jsx(RadixThemesBox,{css:({ ["display"] : "flex", ["justifyContent"] : "center", ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "50%" }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(Img_41cec6d539cf863018d5dfd268991bc1,{},))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%", ["paddingLeft"] : "0" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "50%", ["paddingLeft"] : "40px" }) }),direction:"column",gap:"2"},jsx(Text_85101fddc85e9e02771733f002bac507,{},),jsx(Text_b7d0aca79f96003840103900ea85434f,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["color"] : "gray" })},"Precio sin impuestos $74.380,17"),jsx(Text_e397dbc8694b3333c2491e20d3e22de1,{},),jsx(RadixThemesBox,{css:({ ["marginTop"] : "10px" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "black", ["background"] : "white", ["padding"] : "8px", ["border"] : "2px solid black", ["borderRadius"] : "6px" })},"3 CUOTAS SIN INTER\u00c9S DE $30.000,00")),jsx(RadixThemesLink,{css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),href:"#"},jsx("img",{src:"/tarjeta1.png"},)),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black", ["@media screen and (min-width: 0)"] : ({ ["fontSize"] : "0.85rem" }), ["@media screen and (min-width: 30em)"] : ({ ["fontSize"] : "1rem" }), ["lineHeight"] : "1.2", ["marginTop"] : "8px", ["textAlign"] : "center", ["whiteSpace"] : "nowrap" })},jsx(RadixThemesText,{as:"span",css:({ ["fontWeight"] : "bold" })},"25% de descuento"),jsx(RadixThemesText,{as:"span"},"pagando con Efectivo (en el local)")),jsx(RadixThemesLink,{asChild:true,css:({ ["fontSize"] : "14px", ["color"] : "black", ["textDecoration"] : "underline", ["marginBottom"] : "10px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"#"},"VER MEDIOS DE PAGO")),jsx(RadixThemesSeparator,{css:({ ["borderColor"] : "black", ["borderWidth"] : "1px", ["marginTop"] : "10px", ["marginBottom"] : "10px" }),size:"4"},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "18px", ["fontWeight"] : "medium", ["color"] : "black" })},"TALLES:"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "10px" }),direction:"row",justify:"center",gap:"3"},jsx(Box_210f228d1c81f3ed66b6098bda94f8c3,{},),jsx(Box_267793db3176c50f2a72009191a594df,{},),jsx(Box_c2c11d78edab1ed5c162930deae31db4,{},),jsx(Box_ce3662ef239df329c233070d1c0177d0,{},),jsx(Box_9b58bcfbf91a38ad347a2e6402b491ec,{},),jsx(Box_0910600fa5f33cc4031a1b87fae10f30,{},)),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeigth"] : "bold", ["color"] : "black" })},"Cantidad"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(Debounceinput_65b425f75f9bff374dbad6de1b148657,{},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeigth"] : "blod", ["color"] : "black" })},"\u00a1No te lo pierdas, es el \u00faltimo!")),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["color"] : "gray" })},"1 en stock"),jsx(Button_4737b7ec553c999311c2237cf4543f54,{},),jsx(Fragment_a01050be3aa030fba89472dab8388cdc,{},),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["marginTop"] : "20px" }),direction:"row",gap:"2"},jsx(LucideTruck,{css:({ ["color"] : "black" })},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeigth"] : "bold", ["color"] : "black" })},"Medios de env\u00edo")),jsx(RadixThemesSeparator,{size:"4"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",gap:"3"},jsx(RadixThemesTextField.Root,{css:({ ["width"] : "60%", ["color"] : "black" }),placeholder:"Tu c\u00f3digo postal"},),jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["border"] : "1px solid black", ["fontWeigth"] : "bold" })},"Calcular")),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"https://www.correoargentino.com.ar/formularios/cpa"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["color"] : "black" })},"No s\u00e9 mi c\u00f3digo postal"))),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["marginTop"] : "20px" }),direction:"row",gap:"2"},jsx(LucideStore,{css:({ ["color"] : "black" })},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeigth"] : "bold", ["color"] : "black" })},"Nuestro local")),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid black", ["borderRadius"] : "8px", ["padding"] : "10px", ["width"] : "100%", ["background"] : "white" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",justify:"between",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["color"] : "black", ["width"] : "80%" })},"Delta Store  Av. Circunvalaci\u00f3n Santiago Marzo Este 868 entre Argentino Valle e Independencia (Santa Rosa, La Pampa) \u2013 Lunes a Viernes 9:30 a 12:30 / 16:00 a 21:00 - S\u00e1bado 11 a 19:00 hs"),jsx(RadixThemesText,{as:"p",css:({ ["fontWeigth"] : "bold", ["color"] : "black", ["textAlign"] : "right", ["width"] : "80%" })},"Gratis"))),jsx("img",{css:({ ["width"] : "100%", ["height"] : "auto" }),src:"/tienda2.png"},)))))))):(jsx(Fragment,{},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["height"] : "80vh" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesHeading,{css:({ ["color"] : "black" }),size:"4"},"Producto No Encontrado"),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/products"},jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.02)", ["background"] : "#C49000" }) }),size:"4"},"Volver a Productos")))))))))
  )
}


export function Flex_4e04ad29a47e5bb8803f8a768bcd6bff () {
  
                useEffect(() => {
                    ((...args) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.link_bio___views___products___detalle_page____detalle_page_state.on_load", ({  }), ({  })))], args, ({  }))))()
                    return () => {
                        
                    }
                }, []);
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["paddingTop"] : "20px", ["paddingBottom"] : "20px", ["width"] : "100%", ["rowGap"] : "40px", ["background"] : "white" }),direction:"column",justify:"center",gap:"3",wrap:"wrap"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["background"] : "black", ["width"] : "100%", ["margin"] : "0px", ["padding"] : "0px", ["position"] : "fixed", ["top"] : "0", ["left"] : "0", ["zIndex"] : "1000" }),direction:"row",justify:"center",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["height"] : "50px", ["fontSize"] : "11px", ["padding"] : "19px", ["color"] : "white" })},"25% OFF EFECTIVO - 20% OFF TRANSFERENCIA")),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx("img",{css:({ ["marginTop"] : "30px", ["@media screen and (min-width: 0)"] : ({ ["width"] : "90%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "500px" }), ["height"] : "auto", ["objectFit"] : "contain" }),src:"/fondo1.png"},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx("img",{css:({ ["marginTop"] : "10px", ["@media screen and (min-width: 0)"] : ({ ["width"] : "70%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "auto" }) }),src:"/delta.png"},)),jsx(Fragment_46511e85c555a2f689e7ca7d2c5762c0,{},),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "0.5px solid #e0e0e0", ["width"] : "80%", ["marginTop"] : "1em", ["marginBottom"] : "1em" })},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx("img",{css:({ ["marginTop"] : "10px", ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "auto" }) }),src:"/delta.png"},)),jsx(RadixThemesBox,{css:({ ["width"] : "100%" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["@media screen and (min-width: 0)"] : ({ ["padding"] : "20px" }), ["@media screen and (min-width: 30em)"] : ({ ["padding"] : "40px" }), ["background"] : "black" }),direction:"row",justify:"center",gap:"6",wrap:"wrap"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%", ["paddingInlineStart"] : "8px", ["paddingInlineEnd"] : "8px" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "25%", ["paddingInlineStart"] : "12px", ["paddingInlineEnd"] : "12px" }) }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontSize"] : "15px" }),weight:"bold"},"NAVEGACI\u00d3N"),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/"},"Inicio")),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/products"},"Productos")),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"https://wa.me/543794258727?text=Hola%20Delta%20Store%20\ud83d\udc4b%2C%20quiero%20consultar%20por%20unas%20zapatillas."},"Contacto"))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%", ["paddingInlineStart"] : "8px", ["paddingInlineEnd"] : "8px" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "25%", ["paddingInlineStart"] : "12px", ["paddingInlineEnd"] : "12px" }) }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontSize"] : "15px" }),weight:"bold"},"MEDIOS DE PAGO"),jsx("img",{css:({ ["@media screen and (min-width: 0)"] : ({ ["height"] : "50px" }), ["@media screen and (min-width: 30em)"] : ({ ["height"] : "100px" }) }),src:"/tarjetas.png"},),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "black", ["paddingBottom"] : "20px" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["color"] : "white" }),weight:"bold"},"FORMAS DE ENV\u00cdO"),jsx("img",{css:({ ["height"] : "30px" }),src:"/correoargentino@2x.png"},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "white", ["fontSize"] : "15px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),weight:"bold"},jsx(ReactRouterLink,{to:"https://www.correoargentino.com.ar/formularios/e-commerce"},"SEGUIMIENTO DE ENVIOS"))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%", ["paddingInlineStart"] : "8px", ["paddingInlineEnd"] : "8px" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "25%", ["paddingInlineStart"] : "12px", ["paddingInlineEnd"] : "12px" }) }),direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontSize"] : "15px" }),weight:"bold"},"CONTACTANOS"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucidePhone,{css:({ ["color"] : "white" }),size:16},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white" })},"02954 806873")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideMail,{css:({ ["color"] : "white" }),size:16},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white" })},"shoesdeltastore@gmail.com")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideMapPin,{css:({ ["color"] : "white" }),size:16},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white" })},"JUNIN 868"))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%", ["paddingInlineStart"] : "8px", ["paddingInlineEnd"] : "8px" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "25%", ["paddingInlineStart"] : "12px", ["paddingInlineEnd"] : "12px" }) }),direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontSize"] : "15px" }),weight:"bold"},"REDES SOCIALES"),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{target:(true ? "_blank" : ""),to:"https://www.instagram.com"},jsx(LucideInstagram,{css:({ ["color"] : "white" }),size:22},))),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontSize"] : "15px", ["marginTop"] : "10px" }),weight:"bold"},"NEWSLETTER"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesTextField.Root,{css:({ ["width"] : "150px", ["height"] : "35px" }),placeholder:"shoesdeltastore@gmail.com"},),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["color"] : "black" })},jsx(LucideSend,{},)))))),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "white", ["paddingTop"] : "10px", ["paddingBottom"] : "10px", ["borderTop"] : "1px solid #333", ["textAlign"] : "center" }),justify:"center"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black", ["fontSize"] : "12px" })},"COPYRIGHT DELTA STORE - 2025. TODOS LOS DERECHOS RESERVADOS")),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesText,{as:"p",css:({ ["whiteSpace"] : "nowrap", ["color"] : "black", ["fontSize"] : "12px", ["display"] : "inline" })},"DEFENSA DE LAS Y LOS CONSUMIDORES. PARA RECLAMOS ")),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "12px", ["fontWeight"] : "bold", ["textDecoration"] : "none", ["display"] : "inline", ["marginRight"] : "5px", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"https://autogestion.produccion.gob.ar/consumidores"},"INGRES\u00c1 AC\u00c1."))))
  )
}


export function Debounceinput_1a0d1c1c3314e0576175c470e92dbefb () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_e2fc66b1f2aa86e68ef871919d288731 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_email", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "320px", ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_e2fc66b1f2aa86e68ef871919d288731,placeholder:"E-mail",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_email_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_email_rx_state_ : "")},)
  )
}


export function Checkbox_2bc54ddad1410671b562f54fd1d0c420 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_a1e746fb4e8036114e6758ed9d2d6161 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "wants_newsletter", ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesCheckbox,{checked:reflex___state____state__link_bio___views___products___products____cart_state.wants_newsletter_rx_state_,onCheckedChange:on_change_a1e746fb4e8036114e6758ed9d2d6161,size:"2"},)
  )
}


export function Debounceinput_4d85283cd906041d998523adc30c2219 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_d86c8224693ca52056ee48c997e06629 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_nombre", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_d86c8224693ca52056ee48c997e06629,placeholder:"Nombre",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_nombre_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_nombre_rx_state_ : "")},)
  )
}


export function Debounceinput_1963fd031263effecc6c4e554d71a7db () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_8bdf7a0e49c2ee32906a9eeaa15a6707 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_apellido", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_8bdf7a0e49c2ee32906a9eeaa15a6707,placeholder:"Apellido",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_apellido_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_apellido_rx_state_ : "")},)
  )
}


export function Debounceinput_e7b11f9042ed29fb7e71de3ea58e61e0 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_fcadcd56a5809fbbd9e17544115935cd = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_telefono", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_fcadcd56a5809fbbd9e17544115935cd,placeholder:"Tel\u00e9fono",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_telefono_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_telefono_rx_state_ : "")},)
  )
}


export function Debounceinput_43db34fec696cd4e79494eba41f77e36 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_9195e7a8312a76d88facfbb8e7b7c5fd = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_postal", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_9195e7a8312a76d88facfbb8e7b7c5fd,placeholder:"C\u00f3digo Postal",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_postal_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_postal_rx_state_ : "")},)
  )
}


export function Debounceinput_982556d1608240bf50e7665f18677a5f () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_2f6ca52fc4b6611eb3c87466dfc408f9 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_provincia", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "60%", ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_2f6ca52fc4b6611eb3c87466dfc408f9,placeholder:"Provincia (ej. Corrientes)",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_provincia_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_provincia_rx_state_ : "")},)
  )
}


export function Debounceinput_431954c1390d2c66992b3aba9adab183 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_8e0f319f81114d83b54d8134fc3f3fba = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_calle", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_8e0f319f81114d83b54d8134fc3f3fba,placeholder:"Calle",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_calle_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_calle_rx_state_ : "")},)
  )
}


export function Debounceinput_14b11b75f9502996e1d2eb2f7ae7ba44 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_7767ad5d69727743689f85f74390217e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_numero", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_7767ad5d69727743689f85f74390217e,placeholder:"N\u00famero (o Sin n\u00famero)",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_numero_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_numero_rx_state_ : "")},)
  )
}


export function Debounceinput_c61470dfed7b580b7816ac21fae7beb7 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_ea900af2616d4bfe65f70b41677d1cb8 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_departamento", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_ea900af2616d4bfe65f70b41677d1cb8,placeholder:"Departamento (opcional)",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_departamento_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_departamento_rx_state_ : "")},)
  )
}


export function Debounceinput_eb8ed307dac9e36e33e2242140010095 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_4db3e0810c5937b26e41e28c9854956c = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_barrio", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_4db3e0810c5937b26e41e28c9854956c,placeholder:"Barrio (opcional)",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_barrio_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_barrio_rx_state_ : "")},)
  )
}


export function Debounceinput_481565a25e45d9df40b2a6e6eab27192 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_90813ec31e44f5bfa8ba469bf3c7d1ac = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_ciudad", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_90813ec31e44f5bfa8ba469bf3c7d1ac,placeholder:"Ciudad",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_ciudad_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_ciudad_rx_state_ : "")},)
  )
}


export function Debounceinput_8a81acfe6c6d73febda70a30e8d471b3 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_6d148d9c88a7f58e5529607d83afdf13 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_dni", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_6d148d9c88a7f58e5529607d83afdf13,placeholder:"DNI o CUIT",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_dni_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_dni_rx_state_ : "")},)
  )
}


export function Checkbox_9b48470d84ab3b25ac645f711e23eded () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_110430146706d6f50d9b390a62708f20 = useCallback(((_ev_0) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "billing_same", ["value"] : _ev_0 }), ({  })))], [_ev_0], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesCheckbox,{checked:reflex___state____state__link_bio___views___products___products____cart_state.billing_same_rx_state_,css:({ ["label"] : "Mis datos de facturaci\u00f3n y entrega son los mismos" }),onCheckedChange:on_change_110430146706d6f50d9b390a62708f20,size:"2"},)
  )
}


export function Button_f33f111739bbc87be0e3271b34594a7d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_4180955d92462163c2bc16dcbf76cf49 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.go_to_payment", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "black" }),onClick:on_click_4180955d92462163c2bc16dcbf76cf49},"Continuar para el pago")
  )
}


export function Flex_d2ed292d215b05c5f0464d26f64d1631 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"2"},Array.prototype.map.call(reflex___state____state__link_bio___views___products___products____cart_state.formatted_cart_items_rx_state_ ?? [],((item_rx_state_,i_rx_state_)=>(jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingTop"] : "8px", ["paddingBottom"] : "8px", ["borderBottom"] : "1px solid #eee" }),direction:"row",key:i_rx_state_,gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx("img",{css:({ ["width"] : "70px", ["height"] : "70px", ["borderRadius"] : "8px" }),src:item_rx_state_?.["imagen"]},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "14px", ["color"] : "black" })},item_rx_state_?.["nombre"]),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["color"] : "#555" })},("Talle: "+(isTrue(item_rx_state_?.["talle"]) ? item_rx_state_?.["talle"] : "-"))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["color"] : "#555" })},("Cantidad: "+(isTrue(item_rx_state_?.["cantidad"]) ? item_rx_state_?.["cantidad"] : 1))))),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontWeight"] : "bold", ["fontSize"] : "14px" })},(isTrue(item_rx_state_?.["precio_formateado"]) ? item_rx_state_?.["precio_formateado"] : "")))))))
  )
}


export function Text_cdf3704b2e0062304942778d135b13e6 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "#DAA520", ["marginLeft"] : "auto" })},reflex___state____state__link_bio___views___products___products____cart_state.formatted_total_amount_rx_state_)
  )
}


export function Fragment_01ccb6fd1599df57bd7ffd856beb288e () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(Fragment,{},((reflex___state____state__link_bio___views___products___products____cart_state.total_items_rx_state_ > 0)?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["padding"] : "12px", ["border"] : "1px solid #eee", ["borderRadius"] : "10px", ["background"] : "#fff", ["@media screen and (min-width: 0)"] : ({ ["width"] : "30%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "320px" }), ["marginLeft"] : "20px" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(Flex_d2ed292d215b05c5f0464d26f64d1631,{},),jsx(RadixThemesBox,{css:({ ["paddingTop"] : "10px", ["width"] : "100%" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"2"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "black" })},"Total:"),jsx(Text_cdf3704b2e0062304942778d135b13e6,{},)))))))):(jsx(Fragment,{},jsx(RadixThemesBox,{},)))))
  )
}


export function Iconbutton_77c5b593851501800fc18990827ba3c3 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_1f7e71c56046edc9b3ad76da4c41146b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_selected_panel_mobile", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{"aria-label":"Mostrar/ocultar producto",css:({ ["padding"] : "6px", ["transform"] : (reflex___state____state__link_bio___views___products___products____cart_state.show_selected_panel_mobile_rx_state_ ? "rotate(180deg)" : "rotate(0deg)"), ["transition"] : "transform 0.25s ease" }),onClick:on_click_1f7e71c56046edc9b3ad76da4c41146b},jsx(LucideChevronDown,{},))
  )
}


export function Img_6654d47a150c65a01a8a8188caacfdc5 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx("img",{css:({ ["width"] : "100%", ["height"] : "180px", ["borderRadius"] : "8px" }),src:reflex___state____state__link_bio___views___products___products____cart_state.selected_image_rx_state_},)
  )
}


export function Text_de5256fbb519bcd3082df5ae6b479041 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "16px", ["marginTop"] : "8px", ["color"] : "black" })},(isTrue(reflex___state____state__link_bio___views___products___products____cart_state.selected_product_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.selected_product_rx_state_ : "-"))
  )
}


export function Text_c1ac1132f9cf1564f8fa52244ad010fd () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black" })},(isTrue(reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_) ? ("Talle: "+reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_) : "Talle: -"))
  )
}


export function Text_fb3007b500b02fcdcd8d9ac49bbb4bb8 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black", ["fontWeight"] : "bold", ["fontSize"] : "16px", ["marginTop"] : "6px" })},reflex___state____state__link_bio___views___products___products____cart_state.formatted_selected_price_rx_state_)
  )
}


export function Fragment_ddd5a105b2c1973296cf8d7a79adae14 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(Fragment,{},(reflex___state____state__link_bio___views___products___products____cart_state.show_selected_panel_mobile_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["transition"] : "max-height 0.3s ease", ["padding"] : "10px", ["border"] : "1px solid #eee", ["borderRadius"] : "8px", ["background"] : "#fff" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(Img_6654d47a150c65a01a8a8188caacfdc5,{},),jsx(Text_de5256fbb519bcd3082df5ae6b479041,{},),jsx(Text_c1ac1132f9cf1564f8fa52244ad010fd,{},),jsx(Text_fb3007b500b02fcdcd8d9ac49bbb4bb8,{},))))):(jsx(Fragment,{},jsx(RadixThemesBox,{},)))))
  )
}


export function Debounceinput_92115ed5fc680dc8c6972c37194b069d () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_e2fc66b1f2aa86e68ef871919d288731 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_email", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "100%", ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_e2fc66b1f2aa86e68ef871919d288731,placeholder:"E-mail",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_email_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_email_rx_state_ : "")},)
  )
}


export function Debounceinput_4af4d0f7767c2cb3320f0707e420b01b () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_d86c8224693ca52056ee48c997e06629 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_nombre", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "50%", ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_d86c8224693ca52056ee48c997e06629,placeholder:"Nombre",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_nombre_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_nombre_rx_state_ : "")},)
  )
}


export function Debounceinput_e9fbacd481daf53c4356dc2a578f51fd () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_8bdf7a0e49c2ee32906a9eeaa15a6707 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_apellido", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "50%", ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_8bdf7a0e49c2ee32906a9eeaa15a6707,placeholder:"Apellido",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_apellido_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_apellido_rx_state_ : "")},)
  )
}


export function Debounceinput_8531b9a4cd6ac005ea75f50f43c37132 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_fcadcd56a5809fbbd9e17544115935cd = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_telefono", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "100%", ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_fcadcd56a5809fbbd9e17544115935cd,placeholder:"Tel\u00e9fono",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_telefono_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_telefono_rx_state_ : "")},)
  )
}


export function Debounceinput_2acdf1372f9f1549ad3763c8f43ae54f () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_9195e7a8312a76d88facfbb8e7b7c5fd = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_postal", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "100%", ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_9195e7a8312a76d88facfbb8e7b7c5fd,placeholder:"C\u00f3digo Postal",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_postal_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_postal_rx_state_ : "")},)
  )
}


export function Debounceinput_309c3d389d6d5e5df449c441df0f3168 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_8e0f319f81114d83b54d8134fc3f3fba = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_calle", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "100%", ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_8e0f319f81114d83b54d8134fc3f3fba,placeholder:"Calle",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_calle_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_calle_rx_state_ : "")},)
  )
}


export function Debounceinput_619c5581374009e462d22635de29cc95 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_7767ad5d69727743689f85f74390217e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_numero", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "100%", ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_7767ad5d69727743689f85f74390217e,placeholder:"N\u00famero",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_numero_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_numero_rx_state_ : "")},)
  )
}


export function Debounceinput_40546937851241e5951391d65d59709b () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_90813ec31e44f5bfa8ba469bf3c7d1ac = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_ciudad", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "100%", ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_90813ec31e44f5bfa8ba469bf3c7d1ac,placeholder:"Ciudad",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_ciudad_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_ciudad_rx_state_ : "")},)
  )
}


export function Button_4b57db5b458758fbf9a0f32cc2c70f06 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_4180955d92462163c2bc16dcbf76cf49 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.go_to_payment", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "black", ["width"] : "100%" }),onClick:on_click_4180955d92462163c2bc16dcbf76cf49},"Continuar para el pago")
  )
}


export function Chevrondown_ff81c59e47458217279bb41c82a194e2 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_983743f30cc912584128ed935c602ca6 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_shipping", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(LucideChevronDown,{css:({ ["&"] : (reflex___state____state__link_bio___views___products___products____cart_state.shipping_open_rx_state_ ? ({ ["transform"] : "rotate(180deg)", ["transition"] : "transform 0.25s" }) : ({ ["transform"] : "rotate(0deg)", ["transition"] : "transform 0.25s" })), ["cursor"] : "pointer", ["color"] : "black" }),onClick:on_click_983743f30cc912584128ed935c602ca6,size:20},)
  )
}


export function Debounceinput_9c097c49bee56dfa94d4a196ad44120a () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_e2fc66b1f2aa86e68ef871919d288731 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_email", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_e2fc66b1f2aa86e68ef871919d288731,placeholder:"E-mail",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_email_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_email_rx_state_ : "")},)
  )
}


export function Debounceinput_64da981d2bfeb96481ca86ddc043fb70 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_7767ad5d69727743689f85f74390217e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_numero", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_7767ad5d69727743689f85f74390217e,placeholder:"N\u00famero",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_numero_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_numero_rx_state_ : "")},)
  )
}


export function Debounceinput_973a995a860b0ccff99be30da07925f9 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_9195e7a8312a76d88facfbb8e7b7c5fd = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_postal", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_9195e7a8312a76d88facfbb8e7b7c5fd,placeholder:"CP",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_postal_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_postal_rx_state_ : "")},)
  )
}


export function Debounceinput_83ec620c493b72c0bf4e5d82268b36fa () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_2f6ca52fc4b6611eb3c87466dfc408f9 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "buyer_provincia", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_2f6ca52fc4b6611eb3c87466dfc408f9,placeholder:"Provincia",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.buyer_provincia_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.buyer_provincia_rx_state_ : "")},)
  )
}


export function Button_54b48646ad211a57c39938ac071bbc8a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_11f670175688ddfb3236550ef5ee0383 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_shipping_edit", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "black" }),onClick:on_click_11f670175688ddfb3236550ef5ee0383},"Guardar")
  )
}


export function Text_33b434c83f5016d203d840848db3baa7 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black" })},reflex___state____state__link_bio___views___products___products____cart_state.shipping_full_name_rx_state_)
  )
}


export function Text_8da6e1e1bdcba87e87a5b30ff73a59af () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black" })},reflex___state____state__link_bio___views___products___products____cart_state.shipping_email_rx_state_)
  )
}


export function Text_a027c6626701a6d6721bcbbbb66cbc74 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black" })},reflex___state____state__link_bio___views___products___products____cart_state.shipping_address_rx_state_)
  )
}


export function Text_80da0acccd3218d7aebd48d9a4cb0e96 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black" })},reflex___state____state__link_bio___views___products___products____cart_state.shipping_cityprov_rx_state_)
  )
}


export function Text_c769330f9c1288697998471e58fed1a8 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black" })},reflex___state____state__link_bio___views___products___products____cart_state.shipping_phone_rx_state_)
  )
}


export function Button_5ed0248a454ac47146d5108f9b60e2fa () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_11f670175688ddfb3236550ef5ee0383 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_shipping_edit", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{onClick:on_click_11f670175688ddfb3236550ef5ee0383},"Editar")
  )
}


export function Fragment_91f35939fc6f258226a9dedcfa5461ca () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(Fragment,{},(reflex___state____state__link_bio___views___products___products____cart_state.shipping_editing_rx_state_?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"2"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"2"},jsx(Debounceinput_4d85283cd906041d998523adc30c2219,{},),jsx(Debounceinput_1963fd031263effecc6c4e554d71a7db,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"2"},jsx(Debounceinput_e7b11f9042ed29fb7e71de3ea58e61e0,{},),jsx(Debounceinput_9c097c49bee56dfa94d4a196ad44120a,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"2"},jsx(Debounceinput_431954c1390d2c66992b3aba9adab183,{},),jsx(Debounceinput_64da981d2bfeb96481ca86ddc043fb70,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"2"},jsx(Debounceinput_973a995a860b0ccff99be30da07925f9,{},),jsx(Debounceinput_481565a25e45d9df40b2a6e6eab27192,{},),jsx(Debounceinput_83ec620c493b72c0bf4e5d82268b36fa,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(Button_54b48646ad211a57c39938ac071bbc8a,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/checkout"},"Ir a Contacto")))))):(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"2"},jsx(Text_33b434c83f5016d203d840848db3baa7,{},),jsx(Text_8da6e1e1bdcba87e87a5b30ff73a59af,{},),jsx(Text_a027c6626701a6d6721bcbbbb66cbc74,{},),jsx(Text_80da0acccd3218d7aebd48d9a4cb0e96,{},),jsx(Text_c769330f9c1288697998471e58fed1a8,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/checkout"},"Cambiar")),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Button_5ed0248a454ac47146d5108f9b60e2fa,{},)))))))
  )
}


export function Fragment_b5badceb7e4552e7da75cbdf5b89dad9 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(Fragment,{},(reflex___state____state__link_bio___views___products___products____cart_state.shipping_open_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["padding"] : "12px", ["background"] : "#f9f9f9", ["borderRadius"] : "8px", ["animation"] : "slideDown 0.22s ease" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black" })},"HEY! Si sos de Santa Rosa/ Toay podes elegir env\u00edo express y abonar cuando recibas!"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black" })},"Si sos de otra localidad de La Pampa, habl\u00e1nos as\u00ed coordinamos tu env\u00edo con comisionista."),jsx(Fragment_91f35939fc6f258226a9dedcfa5461ca,{},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black", ["fontWeight"] : "semibold" })},"NOTA: instrucciones especiales sobre el pedido."))))):(jsx(Fragment,{},jsx(RadixThemesBox,{},)))))
  )
}


export function Chevrondown_d01145d0d1cb5ec0d8dd496ab13a2793 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_050a6140c7824bdf0fdfe604f94f2701 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_payment_methods", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(LucideChevronDown,{css:({ ["&"] : (reflex___state____state__link_bio___views___products___products____cart_state.payment_methods_open_rx_state_ ? ({ ["transform"] : "rotate(180deg)", ["transition"] : "transform 0.25s" }) : ({ ["transform"] : "rotate(0deg)", ["transition"] : "transform 0.25s" })), ["cursor"] : "pointer" }),onClick:on_click_050a6140c7824bdf0fdfe604f94f2701,size:20},)
  )
}


export function Chevrondown_c1835388dcd3fb62cd84bc7233bee30e () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_ebe40c0a26a60b6d65941c71e14cf491 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_tarjeta_details", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(LucideChevronDown,{css:({ ["&"] : (reflex___state____state__link_bio___views___products___products____cart_state.tarjeta_details_open_rx_state_ ? ({ ["transform"] : "rotate(180deg)", ["transition"] : "transform 0.2s" }) : ({ ["transform"] : "rotate(0deg)", ["transition"] : "transform 0.2s" })), ["cursor"] : "pointer" }),onClick:on_click_ebe40c0a26a60b6d65941c71e14cf491},)
  )
}


export function Debounceinput_e5a135b116f997eadf7ed873cb8b4981 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_1812d06f89aad8a508f90114e91309f2 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "card_holder", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_1812d06f89aad8a508f90114e91309f2,placeholder:"Titular de la tarjeta",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.card_holder_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.card_holder_rx_state_ : "")},)
  )
}


export function Debounceinput_6a16bd31ca54c0aa9db35a381cce800f () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_a65d258a598124240dae632d0d71a958 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "card_number", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_a65d258a598124240dae632d0d71a958,placeholder:"N\u00famero de tarjeta",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.card_number_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.card_number_rx_state_ : "")},)
  )
}


export function Debounceinput_0105c159381ce2a1244dda263e8634c5 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_a21a68e99af41aacf1ce06c90a2c5f92 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "card_expiry", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_a21a68e99af41aacf1ce06c90a2c5f92,placeholder:"MM/AA",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.card_expiry_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.card_expiry_rx_state_ : "")},)
  )
}


export function Debounceinput_8f73d9fdefc5856fd03fd2f037cf7f30 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_1dbfb29b3123b1c7bcf74cea81fc3ec0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_field", ({ ["key"] : "card_cvc", ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["color"] : "black", ["&:placeholder"] : ({ ["color"] : "black" }) }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_1dbfb29b3123b1c7bcf74cea81fc3ec0,placeholder:"CVC",value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.card_cvc_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.card_cvc_rx_state_ : "")},)
  )
}


export function Fragment_07bbc7115683d881d183d3e54d091d8a () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(Fragment,{},(reflex___state____state__link_bio___views___products___products____cart_state.tarjeta_details_open_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["padding"] : "10px", ["background"] : "#f7f7f7", ["borderRadius"] : "6px", ["animation"] : "slideDown 0.18s ease" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["color"] : "black" })},"Ingrese los datos de su tarjeta de cr\u00e9dito o d\u00e9bito"),jsx(Debounceinput_e5a135b116f997eadf7ed873cb8b4981,{},),jsx(Debounceinput_6a16bd31ca54c0aa9db35a381cce800f,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(Debounceinput_0105c159381ce2a1244dda263e8634c5,{},),jsx(Debounceinput_8f73d9fdefc5856fd03fd2f037cf7f30,{},)),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#666", ["fontSize"] : "13px" })},"Al cliquear la fecha se desplegar\u00e1 el formulario para cargar los datos de la tarjeta."))))):(jsx(Fragment,{},jsx(RadixThemesBox,{},)))))
  )
}


export function Chevrondown_3870c1c1dd1c081b204649e50afacf7f () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b35e609b11d7da18acd0ab47379ebe45 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_transferencia_details", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(LucideChevronDown,{css:({ ["&"] : (reflex___state____state__link_bio___views___products___products____cart_state.transferencia_details_open_rx_state_ ? ({ ["transform"] : "rotate(180deg)", ["transition"] : "transform 0.2s" }) : ({ ["transform"] : "rotate(0deg)", ["transition"] : "transform 0.2s" })), ["cursor"] : "pointer" }),onClick:on_click_b35e609b11d7da18acd0ab47379ebe45},)
  )
}


export function Fragment_9d0890fc59b20f2d7b45d0d68c9ead11 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(Fragment,{},(reflex___state____state__link_bio___views___products___products____cart_state.transferencia_details_open_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["padding"] : "10px", ["background"] : "#f7f7f7", ["borderRadius"] : "6px", ["animation"] : "slideDown 0.18s ease" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#333" })},"Cuando termines la compra, vas a ver la informaci\u00f3n de pago.")))):(jsx(Fragment,{},jsx(RadixThemesBox,{},)))))
  )
}


export function Chevrondown_64ed59d5d772c63ab387e149e184bba1 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_198297191f7b3b1596b7b85b51d84fb5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_efectivo_options", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(LucideChevronDown,{css:({ ["&"] : (reflex___state____state__link_bio___views___products___products____cart_state.efectivo_options_open_rx_state_ ? ({ ["transform"] : "rotate(180deg)", ["transition"] : "transform 0.2s" }) : ({ ["transform"] : "rotate(0deg)", ["transition"] : "transform 0.2s" })), ["cursor"] : "pointer" }),onClick:on_click_198297191f7b3b1596b7b85b51d84fb5},)
  )
}


export function Fragment_dba89bf77f2becbd3392d5b3c974e661 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(Fragment,{},(reflex___state____state__link_bio___views___products___products____cart_state.efectivo_options_open_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["padding"] : "10px", ["background"] : "#f7f7f7", ["borderRadius"] : "6px", ["animation"] : "slideDown 0.18s ease" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p"},"Opciones disponibles:"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesText,{as:"p"},"PAGOFACIL"),jsx(RadixThemesText,{as:"p"},"\u00b7"),jsx(RadixThemesText,{as:"p"},"RAPIPAGO")))))):(jsx(Fragment,{},jsx(RadixThemesBox,{},)))))
  )
}


export function Chevrondown_75365b715b73e22fc907adb88a834edb () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_8150c87047e0a795b1a71c4ca41af4c2 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_mercado_pago", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(LucideChevronDown,{css:({ ["&"] : (reflex___state____state__link_bio___views___products___products____cart_state.mercado_pago_open_rx_state_ ? ({ ["transform"] : "rotate(180deg)", ["transition"] : "transform 0.2s" }) : ({ ["transform"] : "rotate(0deg)", ["transition"] : "transform 0.2s" })), ["cursor"] : "pointer" }),onClick:on_click_8150c87047e0a795b1a71c4ca41af4c2},)
  )
}


export function Fragment_ab8ae23d6b0afe4c35a1673189a9287b () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(Fragment,{},(reflex___state____state__link_bio___views___products___products____cart_state.mercado_pago_open_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["padding"] : "10px", ["background"] : "#f7f7f7", ["borderRadius"] : "6px", ["animation"] : "slideDown 0.18s ease" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p"},"Us\u00e1 tus tarjetas guardadas, dinero disponible y mucho m\u00e1s."),jsx(RadixThemesText,{as:"p"},"Acced\u00e9 a Cuotas sin Tarjeta para comprar ahora y pagar despu\u00e9s."),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesText,{as:"p"},"Visa"),jsx(RadixThemesText,{as:"p"},"Mastercard Prepaid"),jsx(RadixThemesText,{as:"p"},"American Express")),jsx(RadixThemesText,{as:"p"},"Te llevaremos a Mercado Pago. Si no ten\u00e9s una cuenta, pod\u00e9s usar tu e-mail."))))):(jsx(Fragment,{},jsx(RadixThemesBox,{},)))))
  )
}


export function Chevrondown_5b5bfab78660fce91928375ccd336a43 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_50b322596cf63da425cb2837f686ea6b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cuotas_sin_tarjeta", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(LucideChevronDown,{css:({ ["&"] : (reflex___state____state__link_bio___views___products___products____cart_state.cuotas_sin_tarjeta_open_rx_state_ ? ({ ["transform"] : "rotate(180deg)", ["transition"] : "transform 0.2s" }) : ({ ["transform"] : "rotate(0deg)", ["transition"] : "transform 0.2s" })), ["cursor"] : "pointer" }),onClick:on_click_50b322596cf63da425cb2837f686ea6b},)
  )
}


export function Fragment_f86dc597505ee6240069bcbd5d0241d5 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(Fragment,{},(reflex___state____state__link_bio___views___products___products____cart_state.cuotas_sin_tarjeta_open_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["padding"] : "10px", ["background"] : "#f7f7f7", ["borderRadius"] : "6px", ["animation"] : "slideDown 0.18s ease" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p"},"1. Conoc\u00e9 el l\u00edmite disponible de tu L\u00ednea de Cr\u00e9dito y eleg\u00ed la cantidad de cuotas."),jsx(RadixThemesText,{as:"p"},"2. Confirm\u00e1 tu pago, se acredita al instante y est\u00e1 100% protegido."),jsx(RadixThemesText,{as:"p"},"3. Pag\u00e1 mes a mes desde la app de Mercado Pago con el medio que prefieras."),jsx(RadixThemesText,{as:"p"},"Te llevaremos a Mercado Pago. Si a\u00fan no ten\u00e9s la L\u00ednea de Cr\u00e9dito, activala al momento de pagar."))))):(jsx(Fragment,{},jsx(RadixThemesBox,{},)))))
  )
}


export function Fragment_52685ba4225cdb32450d82aea7312d75 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(Fragment,{},(reflex___state____state__link_bio___views___products___products____cart_state.payment_methods_open_rx_state_?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesBox,{css:({ ["padding"] : "10px", ["background"] : "#fff", ["borderRadius"] : "6px", ["boxShadow"] : "0 1px 4px rgba(0,0,0,0.05)" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",justify:"between",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideCreditCard,{css:({ ["color"] : "#333" }),size:18},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black", ["fontWeight"] : "semibold" })},"Tarjeta de cr\u00e9dito o d\u00e9bito")),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#666", ["fontSize"] : "12px" })},"hasta 3 cuotas sin inter\u00e9s"),jsx(Chevrondown_c1835388dcd3fb62cd84bc7233bee30e,{},))),jsx(Fragment_07bbc7115683d881d183d3e54d091d8a,{},),jsx(RadixThemesBox,{css:({ ["padding"] : "10px", ["background"] : "#fff", ["borderRadius"] : "6px", ["boxShadow"] : "0 1px 4px rgba(0,0,0,0.05)" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",justify:"between",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideBanknote,{css:({ ["color"] : "#333" }),size:18},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black", ["fontWeight"] : "semibold" })},"Transferencia o dep\u00f3sito bancario")),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#666", ["fontSize"] : "12px" })},"20% de descuento"),jsx(Chevrondown_3870c1c1dd1c081b204649e50afacf7f,{},))),jsx(Fragment_9d0890fc59b20f2d7b45d0d68c9ead11,{},),jsx(RadixThemesBox,{css:({ ["padding"] : "10px", ["background"] : "#fff", ["borderRadius"] : "6px", ["boxShadow"] : "0 1px 4px rgba(0,0,0,0.05)" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",justify:"between",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideDollarSign,{css:({ ["color"] : "#333" }),size:18},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black", ["fontWeight"] : "semibold" })},"Efectivo")),jsx(Chevrondown_64ed59d5d772c63ab387e149e184bba1,{},))),jsx(Fragment_dba89bf77f2becbd3392d5b3c974e661,{},),jsx(RadixThemesBox,{css:({ ["padding"] : "10px", ["background"] : "#fff", ["borderRadius"] : "6px", ["boxShadow"] : "0 1px 4px rgba(0,0,0,0.05)" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",justify:"between",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideWallet,{css:({ ["color"] : "#333" }),size:18},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "semibold" })},"Mercado Pago")),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#666", ["fontSize"] : "12px" })},"Hasta 3 cuotas sin inter\u00e9s"),jsx(Chevrondown_75365b715b73e22fc907adb88a834edb,{},))),jsx(Fragment_ab8ae23d6b0afe4c35a1673189a9287b,{},),jsx(RadixThemesBox,{css:({ ["padding"] : "10px", ["background"] : "#fff", ["borderRadius"] : "6px", ["boxShadow"] : "0 1px 4px rgba(0,0,0,0.05)" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",justify:"between",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideCalendar,{css:({ ["color"] : "#333" }),size:18},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "semibold" })},"Cuotas sin Tarjeta de Mercado Pago")),jsx(Chevrondown_5b5bfab78660fce91928375ccd336a43,{},))),jsx(Fragment_f86dc597505ee6240069bcbd5d0241d5,{},)))):(jsx(Fragment,{},jsx(RadixThemesBox,{},)))))
  )
}


export function Text_ad53f915d455f9535035f2607e0eea25 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black", ["fontWeight"] : "bold" })},reflex___state____state__link_bio___views___products___products____cart_state.total_text_rx_state_)
  )
}


export function Button_8ada841b10ae0269d36b8d94cfbc1f9a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_3938c481010717ff97e5e29daa0d808a = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.confirm_payment", ({ ["e"] : ({ ["button"] : _e?.["button"], ["buttons"] : _e?.["buttons"], ["client_x"] : _e?.["clientX"], ["client_y"] : _e?.["clientY"], ["alt_key"] : _e?.["altKey"], ["ctrl_key"] : _e?.["ctrlKey"], ["meta_key"] : _e?.["metaKey"], ["shift_key"] : _e?.["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "black" }),onClick:on_click_3938c481010717ff97e5e29daa0d808a},"Finalizar compra")
  )
}


export function Text_f5e190791d12257e631682490c145bd5 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["marginLeft"] : "auto" })},reflex___state____state__link_bio___views___products___products____cart_state.selected_product_rx_state_)
  )
}


export function Text_aa7f42d08139375aa7a9803a2dd7eadd () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["marginLeft"] : "auto" })},reflex___state____state__link_bio___views___products___products____cart_state.quantity_rx_state_)
  )
}


export function Text_90b180a210279456d7d698b91d837970 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontWeight"] : "bold", ["marginLeft"] : "auto" })},reflex___state____state__link_bio___views___products___products____cart_state.formatted_selected_total_rx_state_)
  )
}


export function Text_3cc1c803e193af8afbd14135f87db081 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["marginLeft"] : "auto" })},reflex___state____state__link_bio___views___products___products____cart_state.formatted_recargo_tarjeta_rx_state_)
  )
}


export function Text_434f3b53a7268e06d60966bd2d65b864 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["marginLeft"] : "auto" })},reflex___state____state__link_bio___views___products___products____cart_state.formatted_envio_amount_rx_state_)
  )
}


export function Text_a4742660d72c402a30b29b85c44f3dfa () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontWeight"] : "bold", ["marginLeft"] : "auto" })},reflex___state____state__link_bio___views___products___products____cart_state.formatted_total_con_envio_rx_state_)
  )
}
