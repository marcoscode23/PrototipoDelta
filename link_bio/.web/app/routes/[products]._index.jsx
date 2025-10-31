import {Fragment,useCallback,useContext,useEffect,useRef} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Flex as RadixThemesFlex,IconButton as RadixThemesIconButton,Link as RadixThemesLink,ScrollArea as RadixThemesScrollArea,Text as RadixThemesText,TextField as RadixThemesTextField} from "@radix-ui/themes"
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


function Button_7434cbfae0583ed2f463c9b795f3615c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_85df6add2435592622f29b9c7964eef5 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "VANS KNU SKOOL #793", ["imagen"] : "VANSKNUSKOOL.png", ["precio"] : "$50.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_85df6add2435592622f29b9c7964eef5},"A\u00f1adir al carrito")
  )
}


function Button_09b4c0125a769a0637199e30fc90a529 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f881872f6f06b005cc1e4061af6edb1c = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "VANS U HYLANE", ["imagen"] : "VANSUHYLANE.png", ["precio"] : "$80.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_f881872f6f06b005cc1e4061af6edb1c},"A\u00f1adir al carrito")
  )
}


function Button_3c399a1a32831f738ce1235724c8375e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_38ac543acc4161d2efd5633440e0f8ef = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "PUMA", ["imagen"] : "puma 180.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_38ac543acc4161d2efd5633440e0f8ef},"A\u00f1adir al carrito")
  )
}


function Button_ff42ecd5c334d67145c2483fff0e272b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_42249e4ba337e8fcb49c3b3f78f2fd61 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SAMBA XLG", ["imagen"] : "SAMBAXLG.png", ["precio"] : "$80.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_42249e4ba337e8fcb49c3b3f78f2fd61},"A\u00f1adir al carrito")
  )
}


function Button_b085bdd68e423f73565e869315687a09 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_777d88b31108ac76a624078baca27470 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "AIR FORCE", ["imagen"] : "AIRFORCE.png", ["precio"] : "$80.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_777d88b31108ac76a624078baca27470},"A\u00f1adir al carrito")
  )
}


function Button_b643572ed07650afa2a3899007dd575f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_35c77b6f4e4b654ac6dee0b46ff3d2fc = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CAMPUS X BAD BUNNY", ["imagen"] : "CAMPUSXBADBUNNY.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_35c77b6f4e4b654ac6dee0b46ff3d2fc},"A\u00f1adir al carrito")
  )
}


function Button_32bbfff01b78cd406560fddd2378e5bd () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_d6a050dbefef6cffb9146dec011dddeb = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : " SAMBA #795", ["imagen"] : "SAMBA795.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_d6a050dbefef6cffb9146dec011dddeb},"A\u00f1adir al carrito")
  )
}


function Button_8480ca9b188cc056e4e198a986ac2724 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_edbdeb791dc053ebcccea77eaba2346b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : " DOBLEB DARK #669", ["imagen"] : "DOBLEBDARK669.jpg", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_edbdeb791dc053ebcccea77eaba2346b},"A\u00f1adir al carrito")
  )
}


function Button_4036d6c2d410bc91d015e2bd70f6783c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_ddaa6ca574915e559a00261c8f8c8d19 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "ADI 2000", ["imagen"] : "ADI 2000.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_ddaa6ca574915e559a00261c8f8c8d19},"A\u00f1adir al carrito")
  )
}


function Button_5c1d983f1668540d7f8935a58cce480c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_fc09f3ad1c992757b1afe5400d702b24 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CAMPUS X BADBUNNY #783 ", ["imagen"] : "CAMPUSXBADBUNNY783.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_fc09f3ad1c992757b1afe5400d702b24},"A\u00f1adir al carrito")
  )
}


function Button_c765c5d4f3f45877c53ec48b9ff4cf67 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b625f1b90d7b58ff7c5a9685d38e9d57 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : " SB DUNK #778", ["imagen"] : "SBDUNK778.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_b625f1b90d7b58ff7c5a9685d38e9d57},"A\u00f1adir al carrito")
  )
}


function Button_817912f4e5e0a0a9a5f835384dcedc78 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_322353b7a7e59ecbfba0c9fc50230edf = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : " JORDAN 1 #823", ["imagen"] : "JORDAN1-823.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_322353b7a7e59ecbfba0c9fc50230edf},"A\u00f1adir al carrito")
  )
}


function Button_7da6dec74075bebe4331f92e1e05b163 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_15a89207f10f52f48a757508d869c1f3 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CASUAL DOBLEB COCOA #841", ["imagen"] : "CASUALDOBLEBCOCOA.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_15a89207f10f52f48a757508d869c1f3},"A\u00f1adir al carrito")
  )
}


function Button_69e933e1891a8cf467fda210a15f05a6 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b300cdf8ea9d0547c650957c059f3a39 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "ADIDAS ZORMILLEN #841", ["imagen"] : "ADIDASORMILLEN850.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_b300cdf8ea9d0547c650957c059f3a39},"A\u00f1adir al carrito")
  )
}


function Button_4018f2a4d56502a59f6447e52634ccd2 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_38cf889401381f6da467c1bc5ff55c4f = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : " CONVERSE ALL STAR #717", ["imagen"] : "CONVERSEALLSTAR717.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_38cf889401381f6da467c1bc5ff55c4f},"A\u00f1adir al carrito")
  )
}


function Button_3377a6946514b93904521734a4ed5070 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b932ed9a87d6baacda7e677eb5cd3472 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SB DUNK LOW #798 ", ["imagen"] : "SBDUNKLOW.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_b932ed9a87d6baacda7e677eb5cd3472},"A\u00f1adir al carrito")
  )
}


function Button_672a8439e01dd3aa344f6164aec1a450 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f49956ea6d204aa52f839cdc388c78fc = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "VANS KNU SKOOL #676", ["imagen"] : "VANSKNUSKOOLL.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_f49956ea6d204aa52f839cdc388c78fc},"A\u00f1adir al carrito")
  )
}


function Button_95b6a61c871829836e816bbbd147d0ac () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b787633e3303ed3de4277d6ecdcde1c4 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "JORDAN 1 LOW X TRAVIS SCOTT #769", ["imagen"] : "JORDAN1LOWXTRAVISSCOTT.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_b787633e3303ed3de4277d6ecdcde1c4},"A\u00f1adir al carrito")
  )
}


function Button_509938eda9974198c264cc98cb2dd2d9 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_1ba4580eacc334edad726fc81780fd86 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "DOBLED SKY", ["imagen"] : "DOBLEBSKY.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_1ba4580eacc334edad726fc81780fd86},"A\u00f1adir al carrito")
  )
}


function Button_7ac9427ae039a02e010dbec5fecd1233 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9237de90c481215f27ae59f37015ebf4 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "JORDAN 1 MID BROWN", ["imagen"] : "JORDAN1MIDBROWN.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_9237de90c481215f27ae59f37015ebf4},"A\u00f1adir al carrito")
  )
}


function Button_3d2b3b15d9500572543da81260f79b7f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_805e21fe27d5a308915c8379799dbc51 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SAMBA XLG", ["imagen"] : "SAMBAXLGG.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_805e21fe27d5a308915c8379799dbc51},"A\u00f1adir al carrito")
  )
}


function Button_e5dea65a2e8a1d99035225245d159f01 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_7901d46fb53e2ef9b44b1e1c3b1a3359 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "NEW BALANCE 9060", ["imagen"] : "NEWBALANCE9060.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_7901d46fb53e2ef9b44b1e1c3b1a3359},"A\u00f1adir al carrito")
  )
}


function Button_57245abbe002c03ae9adbdae470ffc58 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_fc4ffb71841b7ebb7f64d4cc89a23b5d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "FORUM LOW 871", ["imagen"] : "FORUMLOW871.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_fc4ffb71841b7ebb7f64d4cc89a23b5d},"A\u00f1adir al carrito")
  )
}


function Button_d26dd2f09510746d418691991c7579cb () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_e9bba2bc3d58c2bfa3a21777055eab2b = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CAMPUS X BAD BUNNY", ["imagen"] : "CAMPUSXBADBUNNYY.png", ["precio"] : "$72.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_e9bba2bc3d58c2bfa3a21777055eab2b},"A\u00f1adir al carrito")
  )
}


function Button_c580f06b0fa2ceda0f366be0c7099486 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_e9f583ef8a5b5abbb414bc32faa02ff2 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SAMBA 869", ["imagen"] : "SAMBA869.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_e9f583ef8a5b5abbb414bc32faa02ff2},"A\u00f1adir al carrito")
  )
}


function Button_d98b49ceaf7ba2e0adb42a415be20739 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_5ef98584047619672a8affad4f2b1449 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "DROP STEP LOW 853", ["imagen"] : "DROPSTEPLOW854.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_5ef98584047619672a8affad4f2b1449},"A\u00f1adir al carrito")
  )
}


function Button_4e6dd2f8ec73f5da6e3abdd327eb251e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_4ccde122dd246540fe29005c47dd51e8 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "OSIRIS 870", ["imagen"] : "OSIRIS870.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_4ccde122dd246540fe29005c47dd51e8},"A\u00f1adir al carrito")
  )
}


function Button_1dddb650d89492ceb7652e238ca5ba07 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_59a110bfa3308b37d245143cbdc6d129 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "JORDAN 1 #821", ["imagen"] : "JORDAN1821.png", ["precio"] : "$90.000" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["color"] : "white", ["background"] : "#DAA520", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_59a110bfa3308b37d245143cbdc6d129},"A\u00f1adir al carrito")
  )
}


function Iconbutton_a7cadb96a9edd08409bb08bbf2ad9d4a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_509bd69998f5255c405f8adb998c0131 = useCallback(((_e) => (addEvents([(ReflexEvent("_call_script", ({ ["javascript_code"] : "\n                const container = document.getElementById('promos');\n                if (container) container.scrollBy({left: 300, behavior: 'smooth'});\n                ", ["callback"] : null }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{css:({ ["padding"] : "6px", ["background"] : "white", ["border"] : "1px solid #ccc", ["borderRadius"] : "50%", ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_509bd69998f5255c405f8adb998c0131},jsx(LucideChevronLeft,{size:28},))
  )
}


function Button_885bdcb0265dc7c800ad49f6486b3f9f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_a0e0f557e13b86266f65d74098f5d180 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SB DUNK LOW PREMIUN 00494 ", ["imagen"] : "sb-dunk-low-premium-00494.png" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_a0e0f557e13b86266f65d74098f5d180},"A\u00f1adir al carrito")
  )
}


function Button_f0a0df3274d46191d56567b87790062a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_13f8d4b795ec7e65f3e3e0d824c61428 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "VANS CLASSIC (SIN PLATAFORMA) NACIONALES", ["imagen"] : "vans-classic-sin-plataforma-nacionales-107.png" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_13f8d4b795ec7e65f3e3e0d824c61428},"A\u00f1adir al carrito")
  )
}


function Button_0a7e57b1e4193ac6db15c8b3ad011d86 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_e1f8fbb56bfc82e7d77e9e2233027b4e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CONVERSE ALL STAR 718", ["imagen"] : "converse-all-star-718.png" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_e1f8fbb56bfc82e7d77e9e2233027b4e},"A\u00f1adir al carrito")
  )
}


function Button_b3a59a31203c8c2bdc9c7290e439a4a7 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_fd99f290ac92ce9d1f0ef160f9ddd353 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SB DUNK LOW PRO PANDA PREMIUN 426", ["imagen"] : "sb-dunk-low-pro-panda-premium-426.png" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_fd99f290ac92ce9d1f0ef160f9ddd353},"A\u00f1adir al carrito")
  )
}


function Button_ae080927451a4bd7396aea3b29f9572a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_f4d998ffb1b5ed51a6bbcce4b16455f0 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "SB DUNK LOW PREMIUN 2", ["imagen"] : "sb-dunk-low-premium2.png" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_f4d998ffb1b5ed51a6bbcce4b16455f0},"A\u00f1adir al carrito")
  )
}


function Button_b4464d03a3dfc2f8f838c8ed899a3024 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_2a86b79fca3f566b43b12f83aab8e291 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "CONVERSE ALL STAR 716", ["imagen"] : "converse-all-star-716.png" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_2a86b79fca3f566b43b12f83aab8e291},"A\u00f1adir al carrito")
  )
}


function Button_df89db255cbb336609acb6ad4d238d4f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_7a9c416be78541ba244498e466b32a4d = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["nombre"] : "VANS BOTA SK8 NACIONALES 102", ["imagen"] : "vans-bota-sk8-nacionales-102.png" }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) }),onClick:on_click_7a9c416be78541ba244498e466b32a4d},"A\u00f1adir al carrito")
  )
}


function Iconbutton_5ada9cf6ad8cecd80277d425b6bab87c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_509bd69998f5255c405f8adb998c0131 = useCallback(((_e) => (addEvents([(ReflexEvent("_call_script", ({ ["javascript_code"] : "\n                const container = document.getElementById('promos');\n                if (container) container.scrollBy({left: 300, behavior: 'smooth'});\n                ", ["callback"] : null }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesIconButton,{css:({ ["padding"] : "6px", ["background"] : "white", ["border"] : "1px solid #ccc", ["borderRadius"] : "50%", ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_509bd69998f5255c405f8adb998c0131},jsx(LucideChevronRight,{size:28},))
  )
}


function Box_65768a2cf2398ac65bf33639baccf358 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_6ef5b3a60225a379524195b0bbfaf823 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["e"] : ({ ["button"] : _e["button"], ["buttons"] : _e["buttons"], ["client_x"] : _e["clientX"], ["client_y"] : _e["clientY"], ["alt_key"] : _e["altKey"], ["ctrl_key"] : _e["ctrlKey"], ["meta_key"] : _e["metaKey"], ["shift_key"] : _e["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["position"] : "fixed", ["top"] : "0", ["left"] : "0", ["width"] : "100%", ["height"] : "100%", ["background"] : "rgba(0, 0, 0, 0.5)", ["zIndex"] : "1000", ["transition"] : "opacity 0.3s ease-in-out" }),onClick:on_click_6ef5b3a60225a379524195b0bbfaf823},)
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


function Text_b9621a6c2549b1fc7d513c022ae70cd5 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "18px", ["color"] : "#DAA520", ["fontWeight"] : "bold", ["marginBottom"] : "10px" })},reflex___state____state__link_bio___views___products___products____cart_state.selected_price_rx_state_)
  )
}


function Box_752cf9348ce3a14a907bd36663983f35 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_5aa4d1b8484d5cf2275cccbda1b81710 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 38 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_ === 38) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_ === 38) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_5aa4d1b8484d5cf2275cccbda1b81710},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"38"))
  )
}


function Box_2a86748db7783939ba571c553338d1c1 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_bb8396725877bf6e7ba84cede0ffc7ee = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 39 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_ === 39) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_ === 39) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_bb8396725877bf6e7ba84cede0ffc7ee},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"39"))
  )
}


function Box_0d4dfcfa4b69ce80d3581cc38ea6d84c () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_099c041e046d15ef7533d1e369131180 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 40 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_ === 40) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_ === 40) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_099c041e046d15ef7533d1e369131180},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"40"))
  )
}


function Box_0e57be3008a74022ffd1f5fc3e4689e0 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_55f34fe0cc3031af9aa4e03cb8dfd61f = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 41 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_ === 41) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_ === 41) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_55f34fe0cc3031af9aa4e03cb8dfd61f},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"41"))
  )
}


function Box_36f688dcc1ace95433d351e4587d867b () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_4d7d639eae19c57fdad64b04d80c2fac = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 42 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_ === 42) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_ === 42) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_4d7d639eae19c57fdad64b04d80c2fac},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"42"))
  )
}


function Box_33bc68cc1cdfb63addba622b6d3f7d8a () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_aeb589b23f02d792f1933829b246e819 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.select_size", ({ ["talle"] : 43 }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["borderRadius"] : "8px", ["padding"] : "5px 10px", ["cursor"] : "pointer", ["background"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_ === 43) ? "#DAA520" : "transparent"), ["color"] : ((reflex___state____state__link_bio___views___products___products____cart_state.selected_size_rx_state_ === 43) ? "white" : "black"), ["&:hover"] : ({ ["background"] : "#DAA520", ["color"] : "white" }) }),onClick:on_click_aeb589b23f02d792f1933829b246e819},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px" })},"43"))
  )
}


function Debounceinput_6659e505d51c94baedeef741632066f2 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_cea2a5c9d4f01f0661e7d0cd03b85933 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.set_quantity", ({ ["value"] : _e["target"]["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(DebounceInput,{css:({ ["width"] : "60px", ["textAlign"] : "center", ["border"] : "1px solid #ccc", ["borderRadius"] : "6px" }),debounceTimeout:300,element:RadixThemesTextField.Root,onChange:on_change_cea2a5c9d4f01f0661e7d0cd03b85933,value:(isNotNullOrUndefined(reflex___state____state__link_bio___views___products___products____cart_state.quantity_rx_state_) ? reflex___state____state__link_bio___views___products___products____cart_state.quantity_rx_state_ : "")},)
  )
}


function Button_bafc1a67caa4bbcdaa27304978157f30 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_986bf5782effb3d8ec0185489ac15ea6 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.add_to_cart", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "white", ["fontSize"] : "18px", ["fontWeight"] : "bold", ["paddingInlineStart"] : "40px", ["paddingInlineEnd"] : "40px", ["paddingTop"] : "15px", ["paddingBottom"] : "15px", ["borderRadius"] : "10px", ["marginTop"] : "15px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["background"] : "#c49c15" }) }),onClick:on_click_986bf5782effb3d8ec0185489ac15ea6},"A\u00d1ADIR AL CARRITO")
  )
}


function Button_6d927c24b88396f50aceaba936b0895e () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_6ef5b3a60225a379524195b0bbfaf823 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.toggle_cart_modal", ({ ["e"] : ({ ["button"] : _e["button"], ["buttons"] : _e["buttons"], ["client_x"] : _e["clientX"], ["client_y"] : _e["clientY"], ["alt_key"] : _e["altKey"], ["ctrl_key"] : _e["ctrlKey"], ["meta_key"] : _e["metaKey"], ["shift_key"] : _e["shiftKey"] }) }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{css:({ ["background"] : "#555", ["color"] : "white", ["fontSize"] : "14px", ["borderRadius"] : "8px", ["marginTop"] : "20px", ["paddingInlineStart"] : "25px", ["paddingInlineEnd"] : "25px", ["&:hover"] : ({ ["background"] : "#333" }) }),onClick:on_click_6ef5b3a60225a379524195b0bbfaf823},"Cerrar")
  )
}


function Fragment_4cdb40da900c4468685a0cc8ba584364 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(Fragment,{},(reflex___state____state__link_bio___views___products___products____cart_state.show_modal_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["@keyframes slideDown"] : ({ ["from"] : ({ ["top"] : "-200px", ["opacity"] : "0" }), ["to"] : ({ ["top"] : "100px", ["opacity"] : "1" }) }) })},jsx(Box_65768a2cf2398ac65bf33639baccf358,{},),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "white", ["padding"] : "30px", ["borderRadius"] : "15px", ["boxShadow"] : "0 4px 15px rgba(0,0,0,0.3)", ["position"] : "fixed", ["top"] : "0", ["left"] : "50%", ["transform"] : "translateX(-50%)", ["animation"] : "slideDown 0.4s ease forwards", ["zIndex"] : "1001", ["maxHeight"] : "90vh", ["overflowY"] : "auto" })},jsx(RadixThemesBox,{css:({ ["spacing"] : "4", ["align"] : "center" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"3"},jsx(Img_017edfa26c777fbda04f1f260e6c08ac,{},),jsx(Text_580da76306873140b444c2bdb9cb3ab0,{},),jsx(Text_b9621a6c2549b1fc7d513c022ae70cd5,{},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "10px" }),direction:"row",justify:"center",gap:"3"},jsx(Box_752cf9348ce3a14a907bd36663983f35,{},),jsx(Box_2a86748db7783939ba571c553338d1c1,{},),jsx(Box_0d4dfcfa4b69ce80d3581cc38ea6d84c,{},),jsx(Box_0e57be3008a74022ffd1f5fc3e4689e0,{},),jsx(Box_36f688dcc1ace95433d351e4587d867b,{},),jsx(Box_33bc68cc1cdfb63addba622b6d3f7d8a,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "10px" }),direction:"row",justify:"center",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["color"] : "#333" })},"Cantidad:"),jsx(Debounceinput_6659e505d51c94baedeef741632066f2,{},)),jsx(Button_bafc1a67caa4bbcdaa27304978157f30,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["fontSize"] : "14px", ["color"] : "#DAA520", ["marginTop"] : "10px", ["textDecoration"] : "none", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/detalle/{CartState.selected_product}"},"Ver m\u00e1s detalle")),jsx(Button_6d927c24b88396f50aceaba936b0895e,{},))))))):(jsx(Fragment,{},jsx(RadixThemesBox,{},)))))
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


function Flex_83890c5dc694418ee95a449d09555b7f () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"2"},Array.prototype.map.call(reflex___state____state__link_bio___views___products___products____cart_state.cart_items_rx_state_ ?? [],((item_rx_state_,i_rx_state_)=>(jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["paddingTop"] : "10px", ["paddingBottom"] : "10px", ["borderBottom"] : "1px solid #eee" }),direction:"row",key:i_rx_state_,gap:"4"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx("img",{css:({ ["width"] : "70px", ["height"] : "70px", ["borderRadius"] : "10px" }),src:item_rx_state_["imagen"]},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start" }),direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "black" })},item_rx_state_["nombre"]),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["color"] : "#555" })},("Talle: "+(isTrue(item_rx_state_["talle"]) ? item_rx_state_["talle"] : "\u2014"))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["color"] : "#555" })},("Cantidad: "+item_rx_state_["cantidad"])),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontWeight"] : "bold" })},item_rx_state_["precio"])),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesIconButton,{color:"red",css:({ ["padding"] : "6px" }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.link_bio___views___products___products____cart_state.remove_from_cart", ({ ["index"] : i_rx_state_ }), ({  })))], [_e], ({  })))),size:"2"},jsx(LucideTrash,{size:24},))))))))
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


function Fragment_afa045e94cab93a9e8239ecbac232df7 () {
  const reflex___state____state__link_bio___views___products___products____cart_state = useContext(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state)



  return (
    jsx(Fragment,{},(reflex___state____state__link_bio___views___products___products____cart_state.show_cart_drawer_rx_state_?(jsx(Fragment,{},jsx(RadixThemesBox,{},jsx(Box_ce069bdd877f87668f9846e77e0f6a09,{},),jsx(RadixThemesBox,{css:({ ["@keyframes slideIn"] : ({ ["from"] : ({ ["right"] : "-400px" }), ["to"] : ({ ["right"] : "0" }) }) })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["position"] : "fixed", ["top"] : "0", ["right"] : "0", ["width"] : "400px", ["height"] : "100vh", ["background"] : "white", ["boxShadow"] : "-2px 0 10px rgba(0,0,0,0.3)", ["zIndex"] : "1200", ["animation"] : "slideIn 0.4s ease forwards" }),direction:"column",gap:"3"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%" }),direction:"row",justify:"between",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "20px", ["color"] : "black" })},"CARRITO DE COMPRAS"),jsx(Button_0fda5740089c4b1813d03e773b5404fd,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["marginTop"] : "10px" }),direction:"row",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "bold", ["color"] : "black" })},"PRODUCTO"),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "bold", ["color"] : "black" })},"SUBTOTAL")),jsx(RadixThemesScrollArea,{css:({ ["maxHeight"] : "60vh", ["overflowY"] : "auto" })},jsx(Flex_83890c5dc694418ee95a449d09555b7f,{},)),jsx(RadixThemesBox,{css:({ ["spacing"] : "4", ["align"] : "start", ["padding"] : "20px" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["justifyContent"] : "between", ["alignItems"] : "center", ["marginTop"] : "15px" }),direction:"row",gap:"3"},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "black" })},"Subtotal (sin env\u00edo):"),jsx(Text_5cd150c78526c7b06760fb7cff02ae77,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "10px" }),direction:"row",gap:"2"},jsx(LucideTruck,{css:({ ["color"] : "#000" })},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "black" })},"Medios de env\u00edo")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "8px" }),direction:"row",gap:"2"},jsx(RadixThemesTextField.Root,{css:({ ["width"] : "60%", ["borderRadius"] : "8px", ["border"] : "1px solid #ccc", ["padding"] : "5px", ["background"] : "white", ["color"] : "black" }),placeholder:"Tu c\u00f3digo postal"},),jsx(RadixThemesButton,{css:({ ["background"] : "#000", ["color"] : "#fff", ["paddingInlineStart"] : "12px", ["paddingInlineEnd"] : "12px", ["paddingTop"] : "5px", ["paddingBottom"] : "5px", ["borderRadius"] : "8px", ["cursor"] : "pointer", ["&:hover"] : ({ ["backgroundColor"] : "#222" }) })},"CALCULAR")),jsx(RadixThemesLink,{asChild:true,css:({ ["fontSize"] : "13px", ["color"] : "#000", ["textDecoration"] : "underline", ["marginTop"] : "4px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"https://www.correoargentino.com.ar/formularios/cpa"},"No s\u00e9 mi c\u00f3digo postal")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "15px" }),direction:"row",gap:"2"},jsx(LucideStore,{css:({ ["color"] : "#000" })},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "black" })},"Nuestro local")),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #ccc", ["borderRadius"] : "10px", ["padding"] : "10px", ["marginTop"] : "5px" })},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "13px", ["color"] : "#000" })},"Delta Store  Av. Circunvalaci\u00f3n Santiago Marzo Este 868 entre Argentino Valle e Independencia (Santa Rosa, La Pampa) \u2013 Lunes a Viernes 9:30 a 12:30 / 16:00 a 21:00 \u2013 S\u00e1bado 11 a 19 hs"),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "black", ["marginTop"] : "4px" })},"Gratis")),jsx(Text_4f43d4da5738bae7d7c430e3f23d828f,{},),jsx(RadixThemesButton,{css:({ ["background"] : "#DAA520", ["color"] : "black", ["width"] : "100%", ["borderRadius"] : "8px", ["paddingTop"] : "12px", ["paddingBottom"] : "12px", ["fontWeight"] : "bold", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) })},"INICIAR COMPRA")))),jsx(RadixThemesBox,{},)))):(jsx(Fragment,{},))))
  )
}


export default function Component() {
const ref_promos = useRef(null); refs["ref_promos"] = ref_promos;




  return (
    jsx(Fragment,{},jsx(Fragment,{},jsx(RadixThemesBox,{css:({ ["paddingTop"] : "60px", ["paddingBottom"] : "60px", ["width"] : "100%", ["align"] : "center", ["justify"] : "center", ["wrap"] : "wrap", ["rowGap"] : "40px", ["background"] : "white" })},jsx(RadixThemesBox,{},jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["@media screen and (min-width: 0)"] : ({ ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingInlineStart"] : "50px", ["paddingInlineEnd"] : "50px" }), ["height"] : "auto", ["background"] : "white" }),direction:"row",justify:"start",gap:"4",wrap:"wrap"},jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["width"] : "100%" }),direction:"row",justify:"center",gap:"1"},jsx(RadixThemesTextField.Root,{css:({ ["width"] : "250px", ["borderRadius"] : "10px", ["borderColor"] : "transparent", ["background"] : "#DAA520", ["&:placeholder"] : ({ ["color"] : "white" }), ["&:focus"] : ({ ["borderColor"] : "transparent", ["boxShadow"] : "0 0 0 2px #555" }) }),placeholder:"Buscar",size:"3"},),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["color"] : "black", ["border"] : "1px solid #ccc", ["borderLeft"] : "none", ["borderRadius"] : "0px 5px 5px 0px", ["height"] : "100%", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px", ["&:hover"] : ({ ["background"] : "#050404", ["color"] : "white" }) })},jsx(LucideSearch,{},))),jsx(RadixThemesFlex,{css:({ ["flex"] : 1, ["justifySelf"] : "stretch", ["alignSelf"] : "stretch" })},),jsx(Fragment,{},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["alignItems"] : "center", ["@media screen and (min-width: 0)"] : ({ ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px" }), ["@media screen and (min-width: 30em)"] : ({ ["paddingInlineStart"] : "40px", ["paddingInlineEnd"] : "40px" }), ["paddingTop"] : "20px", ["paddingBottom"] : "20px", ["width"] : "100%" }),direction:"column",justify:"center",gap:"2"},jsx(RadixThemesFlex,{align:"center",css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["width"] : "100%" }),justify:"center"},jsx(Button_95b1c403e9214672526dbb2617fcf046,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "center", ["width"] : "100%" }),direction:"row",justify:"center",gap:"2"},jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "10px", ["textDecoration"] : "none", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/register"},"CREAR CUENTA")),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black", ["fontSize"] : "10px" })},"|"),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "10px", ["textDecoration"] : "none", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/login"},"INICIAR SESI\u00d3N"))))))),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["position"] : "sticky", ["top"] : "0", ["zIndex"] : "10", ["boxShadow"] : "0 2px 5px rgba(0,0,0,0.2)" })},jsx(RadixThemesText,{as:"p",css:({ ["@media screen and (min-width: 0)"] : ({ ["fontSize"] : "20px" }), ["@media screen and (min-width: 30em)"] : ({ ["fontSize"] : "28px" }), ["fontWeight"] : "bold", ["color"] : "black", ["textAlign"] : "center", ["marginTop"] : "10px", ["marginBottom"] : "10px", ["paddingInlineStart"] : "10px", ["paddingInlineEnd"] : "10px" })},"Nuestros Productos - Zapatillas")),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx("img",{css:({ ["marginTop"] : "50px", ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "auto" }) }),src:"delta.png"},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx("img",{css:({ ["marginTop"] : "50px", ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "auto" }) }),src:"cambio.png"},))),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"row",justify:"center",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/"},jsx(RadixThemesButton,{css:({ ["fontSize"] : "16px", ["color"] : "white", ["borderRadius"] : "30px", ["fontWeight"] : "bold", ["background"] : "#DAA520", ["marginTop"] : "100px", ["&:hover"] : ({ ["transform"] : "scale(1.05)" }) })},"VOLVER")))),jsx(RadixThemesFlex,{align:"start",css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["rowGap"] : "5px", ["width"] : "100%", ["paddingTop"] : "70px", ["paddingBottom"] : "70px" }),justify:"center",gap:"2",wrap:"wrap"},jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/VANS_KNU_SKOOL_793"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"VANSKNUSKOOL.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"VANS KNU SKOOL #793"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$50.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$60.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_7434cbfae0583ed2f463c9b795f3615c,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/VANS_U_HYLANE"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"VANSUHYLANE.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"VANS U HYLANE"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$80.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$60.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_09b4c0125a769a0637199e30fc90a529,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/PUMA"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"puma 180.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"PUMA"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_3c399a1a32831f738ce1235724c8375e,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/SAMBA_XLG"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"SAMBAXLG.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"SAMBA XLG"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$80.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$60.000 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_ff42ecd5c334d67145c2483fff0e272b,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/AIR_FORCE"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"AIRFORCE.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"AIR FORCE"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$80.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$60.000 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_b085bdd68e423f73565e869315687a09,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/CAMPUS_X_BAD_BUNNY"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"CAMPUSXBADBUNNY.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"CAMPUS X BAD BUNNY"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_b643572ed07650afa2a3899007dd575f,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/_SAMBA_795"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"SAMBA795.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })}," SAMBA #795"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$80.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_32bbfff01b78cd406560fddd2378e5bd,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/_DOBLEB_DARK_669"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"DOBLEBDARK669.jpg"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })}," DOBLEB DARK #669"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_8480ca9b188cc056e4e198a986ac2724,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/ADI_2000"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"ADI 2000.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"ADI 2000"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$63.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_4036d6c2d410bc91d015e2bd70f6783c,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/CAMPUS_X_BADBUNNY_783_"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"CAMPUSXBADBUNNY783.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"CAMPUS X BADBUNNY #783 "),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_5c1d983f1668540d7f8935a58cce480c,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/_SB_DUNK_778"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"SBDUNK778.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })}," SB DUNK #778"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_c765c5d4f3f45877c53ec48b9ff4cf67,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/_JORDAN_1_823"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"JORDAN1-823.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })}," JORDAN 1 #823"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_817912f4e5e0a0a9a5f835384dcedc78,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/CASUAL_DOBLEB_COCOA_841"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"CASUALDOBLEBCOCOA.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"CASUAL DOBLEB COCOA #841"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_7da6dec74075bebe4331f92e1e05b163,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/ADIDAS_ZORMILLEN_841"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"ADIDASORMILLEN850.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"ADIDAS ZORMILLEN #841"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_69e933e1891a8cf467fda210a15f05a6,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/_CONVERSE_ALL_STAR_717"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"CONVERSEALLSTAR717.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })}," CONVERSE ALL STAR #717"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_4018f2a4d56502a59f6447e52634ccd2,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/SB_DUNK_LOW_798_"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"SBDUNKLOW.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"SB DUNK LOW #798 "),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_3377a6946514b93904521734a4ed5070,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/VANS_KNU_SKOOL_676"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"VANSKNUSKOOLL.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"VANS KNU SKOOL #676"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_672a8439e01dd3aa344f6164aec1a450,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/JORDAN_1_LOW_X_TRAVIS_SCOTT_769"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"JORDAN1LOWXTRAVISSCOTT.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"JORDAN 1 LOW X TRAVIS SCOTT #769"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_95b6a61c871829836e816bbbd147d0ac,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/DOBLED_SKY"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"DOBLEBSKY.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"DOBLED SKY"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_509938eda9974198c264cc98cb2dd2d9,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/JORDAN_1_MID_BROWN"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"JORDAN1MIDBROWN.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"JORDAN 1 MID BROWN"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_7ac9427ae039a02e010dbec5fecd1233,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/SAMBA_XLG"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"SAMBAXLGG.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"SAMBA XLG"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$60.000 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_3d2b3b15d9500572543da81260f79b7f,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/NEW_BALANCE_9060"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"NEWBALANCE9060.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"NEW BALANCE 9060"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_e5dea65a2e8a1d99035225245d159f01,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/FORUM_LOW_871"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"FORUMLOW871.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"FORUM LOW 871"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_57245abbe002c03ae9adbdae470ffc58,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/CAMPUS_X_BAD_BUNNY"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"CAMPUSXBADBUNNYY.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"CAMPUS X BAD BUNNY"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$72.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$54.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_d26dd2f09510746d418691991c7579cb,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/SAMBA_869"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"SAMBA869.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"SAMBA 869"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_c580f06b0fa2ceda0f366be0c7099486,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/DROP_STEP_LOW_853"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"DROPSTEPLOW854.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"DROP STEP LOW 853"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_d98b49ceaf7ba2e0adb42a415be20739,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/OSIRIS_870"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"OSIRIS870.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"OSIRIS 870"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_4e6dd2f8ec73f5da6e3abdd327eb251e,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},))),jsx(RadixThemesBox,{css:({ ["maxWidth"] : "400px", ["width"] : ["calc(45%)", "calc(38%)"], ["minWidth"] : "220", ["background"] : "transparent", ["border"] : "none", ["boxShadow"] : "none", ["align"] : "center", ["justify"] : "center" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/detalle/JORDAN_1_821"},jsx("img",{css:({ ["width"] : "200px", ["height"] : "250px", ["borderRadius"] : "8px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"JORDAN1821.png"},))),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["fontWeight"] : "medium", ["color"] : "black" })},"JORDAN 1 #821"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["fontWeight"] : "bold", ["color"] : "black" })},"$90.000"),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["opacity"] : "1", ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "bold" })},"$67.500 con efectivo (en el local)"),jsx(RadixThemesBox,{css:({ ["border"] : "1px solid #DAA520", ["padding"] : "5px", ["borderRadius"] : "5px", ["background"] : "white" })},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "#DAA520", ["fontSize"] : "15px", ["fontWeight"] : "medium", ["border"] : "#DAA520" })},"3 cuotas sin inter\u00e9s de $30.000,00")),jsx(Button_1dddb650d89492ceb7652e238ca5ba07,{},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "40px", ["marginBottom"] : "2em" })},)))),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["marginBottom"] : "50px" })},jsx(RadixThemesButton,{css:({ ["background"] : "black", ["color"] : "white", ["borderRadius"] : "5px", ["paddingInlineStart"] : "20px", ["paddingInlineEnd"] : "20px", ["paddingTop"] : "10px", ["paddingBottom"] : "10px", ["&:hover"] : ({ ["background"] : "#444" }), ["marginTop"] : "20px" })},"Mostrar m\u00e1s productos")),jsx(RadixThemesBox,{css:({ ["width"] : "100%", ["justify"] : "center", ["align"] : "center" })},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "22px", ["fontWeight"] : "bold", ["color"] : "#DAA520", ["marginTop"] : "50px", ["marginBottom"] : "20px", ["textAlign"] : "center" })},"\ud83d\udecd\ufe0f Productos en Promoci\u00f3n"),jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",css:({ ["marginBottom"] : "60px" }),direction:"row",justify:"center",gap:"4"},jsx(Iconbutton_a7cadb96a9edd08409bb08bbf2ad9d4a,{},),jsx(RadixThemesScrollArea,{css:({ ["width"] : "80%", ["overflowX"] : "auto", ["whiteSpace"] : "nowrap", ["scrollBehavior"] : "smooth" }),id:"promos",ref:ref_promos},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"5"},jsx(RadixThemesBox,{css:({ ["background"] : "white", ["borderRadius"] : "15px", ["boxShadow"] : "0 2px 10px rgba(0,0,0,0.1)", ["padding"] : "15px", ["marginInlineStart"] : "10px", ["marginInlineEnd"] : "10px", ["minWidth"] : "220px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"sb-dunk-low-premium-00494.png"},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "14px", ["color"] : "black" })},"SB DUNK LOW PREMIUN 00494 "),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["color"] : "#DAA520", ["fontWeight"] : "bold" })},"$40.000,00"),jsx(Button_885bdcb0265dc7c800ad49f6486b3f9f,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "13px", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/detalle/SB_DUNK_LOW_PREMIUN_00494_"},"Ver m\u00e1s detalle")))),jsx(RadixThemesBox,{css:({ ["background"] : "white", ["borderRadius"] : "15px", ["boxShadow"] : "0 2px 10px rgba(0,0,0,0.1)", ["padding"] : "15px", ["marginInlineStart"] : "10px", ["marginInlineEnd"] : "10px", ["minWidth"] : "220px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"vans-classic-sin-plataforma-nacionales-107.png"},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "14px", ["color"] : "black" })},"VANS CLASSIC (SIN PLATAFORMA) NACIONALES"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["color"] : "#DAA520", ["fontWeight"] : "bold" })},"$40.000,00"),jsx(Button_f0a0df3274d46191d56567b87790062a,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "13px", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/detalle/VANS_CLASSIC_(SIN_PLATAFORMA)_NACIONALES"},"Ver m\u00e1s detalle")))),jsx(RadixThemesBox,{css:({ ["background"] : "white", ["borderRadius"] : "15px", ["boxShadow"] : "0 2px 10px rgba(0,0,0,0.1)", ["padding"] : "15px", ["marginInlineStart"] : "10px", ["marginInlineEnd"] : "10px", ["minWidth"] : "220px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"converse-all-star-718.png"},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "14px", ["color"] : "black" })},"CONVERSE ALL STAR 718"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["color"] : "#DAA520", ["fontWeight"] : "bold" })},"$49.000"),jsx(Button_0a7e57b1e4193ac6db15c8b3ad011d86,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "13px", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/detalle/CONVERSE_ALL_STAR_718"},"Ver m\u00e1s detalle")))),jsx(RadixThemesBox,{css:({ ["background"] : "white", ["borderRadius"] : "15px", ["boxShadow"] : "0 2px 10px rgba(0,0,0,0.1)", ["padding"] : "15px", ["marginInlineStart"] : "10px", ["marginInlineEnd"] : "10px", ["minWidth"] : "220px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"sb-dunk-low-pro-panda-premium-426.png"},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "14px", ["color"] : "black" })},"SB DUNK LOW PRO PANDA PREMIUN 426"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["color"] : "#DAA520", ["fontWeight"] : "bold" })},"$56.000"),jsx(Button_b3a59a31203c8c2bdc9c7290e439a4a7,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "13px", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/detalle/SB_DUNK_LOW_PRO_PANDA_PREMIUN_426"},"Ver m\u00e1s detalle")))),jsx(RadixThemesBox,{css:({ ["background"] : "white", ["borderRadius"] : "15px", ["boxShadow"] : "0 2px 10px rgba(0,0,0,0.1)", ["padding"] : "15px", ["marginInlineStart"] : "10px", ["marginInlineEnd"] : "10px", ["minWidth"] : "220px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"sb-dunk-low-premium2.png"},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "14px", ["color"] : "black" })},"SB DUNK LOW PREMIUN 2"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["color"] : "#DAA520", ["fontWeight"] : "bold" })},"$63.000"),jsx(Button_ae080927451a4bd7396aea3b29f9572a,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "13px", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/detalle/SB_DUNK_LOW_PREMIUN_2"},"Ver m\u00e1s detalle")))),jsx(RadixThemesBox,{css:({ ["background"] : "white", ["borderRadius"] : "15px", ["boxShadow"] : "0 2px 10px rgba(0,0,0,0.1)", ["padding"] : "15px", ["marginInlineStart"] : "10px", ["marginInlineEnd"] : "10px", ["minWidth"] : "220px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"converse-all-star-716.png"},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "14px", ["color"] : "black" })},"CONVERSE ALL STAR 716"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["color"] : "#DAA520", ["fontWeight"] : "bold" })},"$56.000,00"),jsx(Button_b4464d03a3dfc2f8f838c8ed899a3024,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "13px", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/detalle/CONVERSE_ALL_STAR_716"},"Ver m\u00e1s detalle")))),jsx(RadixThemesBox,{css:({ ["background"] : "white", ["borderRadius"] : "15px", ["boxShadow"] : "0 2px 10px rgba(0,0,0,0.1)", ["padding"] : "15px", ["marginInlineStart"] : "10px", ["marginInlineEnd"] : "10px", ["minWidth"] : "220px" })},jsx(RadixThemesFlex,{align:"center",className:"rx-Stack",direction:"column",gap:"3"},jsx("img",{css:({ ["width"] : "180px", ["height"] : "180px", ["borderRadius"] : "10px", ["&:hover"] : ({ ["transform"] : "scale(1.05)", ["cursor"] : "pointer" }) }),src:"vans-bota-sk8-nacionales-102.png"},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["fontSize"] : "14px", ["color"] : "black" })},"VANS BOTA SK8 NACIONALES 102"),jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "16px", ["color"] : "#DAA520", ["fontWeight"] : "bold" })},"$44.000,00"),jsx(Button_df89db255cbb336609acb6ad4d238d4f,{},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "13px", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/detalle/VANS_BOTA_SK8_NACIONALES_102"},"Ver m\u00e1s detalle")))))),jsx(Iconbutton_5ada9cf6ad8cecd80277d425b6bab87c,{},))),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesBox,{css:({ ["borderTop"] : "1px dotted #ccc", ["width"] : "90%", ["marginTop"] : "2em", ["marginBottom"] : "2em" })},)),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx("img",{css:({ ["marginTop"] : "30px", ["@media screen and (min-width: 0)"] : ({ ["width"] : "100%" }), ["@media screen and (min-width: 30em)"] : ({ ["width"] : "auto" }) }),src:"delta.png"},)),jsx(RadixThemesBox,{css:({ ["width"] : "100%" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "40px", ["background"] : "black" }),direction:"row",justify:"center",gap:"3",wrap:"wrap"},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontSize"] : "15px" }),weight:"bold"},"NAVEGACI\u00d3N"),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/"},"Inicio")),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"/products"},"Productos")),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "white", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{to:"https://wa.me/543794258727?text=Hola%20Delta%20Store%20\ud83d\udc4b%2C%20quiero%20consultar%20por%20unas%20zapatillas."},"Contacto"))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontSize"] : "15px" }),weight:"bold"},"MEDIOS DE PAGO"),jsx("img",{css:({ ["height"] : "100px" }),src:"/tarjetas.png"},),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "black", ["paddingBottom"] : "20px" })},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["fontSize"] : "14px", ["color"] : "white" }),weight:"bold"},"FORMAS DE ENV\u00cdO"),jsx("img",{css:({ ["height"] : "30px" }),src:"/correoargentino@2x.png"},),jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "white", ["fontSize"] : "15px", ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) }),weight:"bold"},jsx(ReactRouterLink,{to:"https://www.correoargentino.com.ar/formularios/e-commerce"},"SEGUIMIENTO DE ENVIOS"))))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"1"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontSize"] : "15px" }),weight:"bold"},"CONTACTANOS"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucidePhone,{css:({ ["color"] : "white" }),size:16},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white" })},"02954 806873")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideMail,{css:({ ["color"] : "white" }),size:16},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white" })},"shoesdeltastore@gmail.com")),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(LucideMapPin,{css:({ ["color"] : "white" }),size:16},),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white" })},"JUNIN 868"))),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"column",gap:"2"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontSize"] : "15px" }),weight:"bold"},"REDES SOCIALES"),jsx(RadixThemesLink,{asChild:true,css:({ ["&:hover"] : ({ ["color"] : "var(--accent-8)" }) })},jsx(ReactRouterLink,{target:(true ? "_blank" : ""),to:"https://www.instagram.com"},jsx(LucideInstagram,{css:({ ["color"] : "white" }),size:22},))),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "white", ["fontSize"] : "15px", ["marginTop"] : "10px" }),weight:"bold"},"NEWSLETTER"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",direction:"row",gap:"3"},jsx(RadixThemesTextField.Root,{css:({ ["width"] : "150px", ["height"] : "35px" }),placeholder:"shoesdeltastore@gmail.com"},),jsx(RadixThemesButton,{css:({ ["background"] : "white", ["color"] : "black" })},jsx(LucideSend,{},)))))),jsx(Fragment,{},jsx(Fragment_4cdb40da900c4468685a0cc8ba584364,{},)),jsx(Fragment_afa045e94cab93a9e8239ecbac232df7,{},),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center", ["background"] : "white", ["paddingTop"] : "10px", ["paddingBottom"] : "10px", ["borderTop"] : "1px solid #333", ["textAlign"] : "center" }),justify:"center"},jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black", ["fontSize"] : "12px" })},"COPYRIGHT DELTA STORE - 2025. TODOS LOS DERECHOS RESERVADOS")),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesText,{as:"p",css:({ ["whiteSpace"] : "nowrap", ["color"] : "black", ["fontSize"] : "12px", ["display"] : "inline" })},"DEFENSA DE LAS Y LOS CONSUMIDORES. PARA RECLAMOS ")),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "12px", ["fontWeight"] : "bold", ["textDecoration"] : "none", ["display"] : "inline", ["marginRight"] : "5px", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"https://autogestion.produccion.gob.ar/consumidores"},"INGRES\u00c1 AC\u00c1."))),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "black", ["fontSize"] : "12px", ["display"] : "inline" })}," / "),jsx(RadixThemesFlex,{css:({ ["display"] : "flex", ["alignItems"] : "center", ["justifyContent"] : "center" })},jsx(RadixThemesLink,{asChild:true,css:({ ["color"] : "black", ["fontSize"] : "12px", ["fontWeight"] : "bold", ["textDecoration"] : "none", ["display"] : "inline", ["&:hover"] : ({ ["textDecoration"] : "underline" }) })},jsx(ReactRouterLink,{to:"/arrepentimiento"},"BOT\u00d3N DE ARREPENTIMIENTO"))))),jsx("title",{},"LinkBio | Products"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}