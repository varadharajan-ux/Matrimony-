import { useState } from "react";
const P = [
  { id:1,name:"Priya Sharma",age:26,city:"Chennai",job:"Software Engineer",photo:"https://randomuser.me/api/portraits/women/44.jpg",tags:["Dance","Travel"],verified:true,g:"f" },
  { id:2,name:"Anjali Nair",age:24,city:"Coimbatore",job:"Doctor",photo:"https://randomuser.me/api/portraits/women/68.jpg",tags:["Yoga","Music"],verified:true,g:"f" },
  { id:3,name:"Meera Krishnan",age:28,city:"Madurai",job:"CA",photo:"https://randomuser.me/api/portraits/women/90.jpg",tags:["Trekking","Finance"],verified:true,g:"f" },
  { id:4,name:"Kavitha Rajan",age:25,city:"Trichy",job:"Teacher",photo:"https://randomuser.me/api/portraits/women/33.jpg",tags:["Music","Art"],verified:false,g:"f" },
  { id:5,name:"Arjun Ravi",age:29,city:"Chennai",job:"Software Engineer",photo:"https://randomuser.me/api/portraits/men/32.jpg",tags:["Cricket","Travel"],verified:true,g:"m" },
  { id:6,name:"Vikram Suresh",age:31,city:"Bangalore",job:"Business Analyst",photo:"https://randomuser.me/api/portraits/men/45.jpg",tags:["Gym","Finance"],verified:true,g:"m" },
];
const st = {
  page:{fontFamily:"'Segoe UI',sans-serif",background:"#f9f6f3",minHeight:"100vh",color:"#1a1a2e"},
  nav:{position:"fixed",top:0,left:0,right:0,zIndex:99,background:"rgba(255,255,255,.93)",backdropFilter:"blur(12px)",borderBottom:"1px solid #ede8e2",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 5%",height:58},
  btn:(bg,c)=>({background:bg,color:c,border:"none",padding:"9px 20px",borderRadius:9,fontWeight:600,fontSize:13,cursor:"pointer",transition:"opacity .2s"}),
  grid:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:18,maxWidth:1100,margin:"0 auto",padding:"0 20px"},
  card:{background:"#fff",borderRadius:14,overflow:"hidden",cursor:"pointer",boxShadow:"0 2px 10px rgba(0,0,0,.07)",border:"1px solid #ede8e2",transition:"transform .2s,box-shadow .2s"},
  overlay:{position:"fixed",inset:0,background:"rgba(10,8,20,.55)",backdropFilter:"blur(7px)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:16},
  modal:{background:"#fff",borderRadius:18,maxWidth:420,width:"100%",padding:28,boxShadow:"0 24px 64px rgba(0,0,0,.18)",maxHeight:"90vh",overflowY:"auto"},
  inp:{width:"100%",padding:"10px 13px",border:"1.5px solid #e4ddd6",borderRadius:9,fontSize:14,fontFamily:"inherit",outline:"none",marginTop:5},
  pill:{display:"inline-block",background:"#fde8e4",color:"#b85c50",fontSize:11,fontWeight:500,padding:"3px 9px",borderRadius:20,margin:"2px"},
};
export default function App() {
  const [tab,setTab]=useState("all");
  const [sel,setSel]=useState(null);
  const [modal,setModal]=useState(null);
  const [liked,setLiked]=useState([]);
  const [toast,setToast]=useState(null);
  const [f,setF]=useState({name:"",email:"",phone:"",gender:"f",password:""});
  const notify=m=>{setToast(m);setTimeout(()=>setToast(null),2500)};
  const list=tab==="all"?P:P.filter(x=>x.g===tab);
  return (
    <div style={st.page}>
      <style>{`*{box-sizing:border-box;margin:0;padding:0}.c:hover{transform:translateY(-5px)!important;box-shadow:0 14px 36px rgba(0,0,0,.12)!important}button:hover{opacity:.88}`}</style>
      {toast&&<div style={{position:"fixed",top:68,right:18,zIndex:999,background:"#1a1a2e",color:"#fff",padding:"10px 18px",borderRadius:10,fontSize:13,fontWeight:500}}>{toast}</div>}

      {/* NAV */}
      <nav style={st.nav}>
        <div style={{fontFamily:"Georgia,serif",fontSize:20,fontWeight:700,color:"#b85c50",display:"flex",alignItems:"center",gap:8}}><span>💍</span>Global Varan</div>
        <div style={{display:"flex",gap:8}}>
          <button style={st.btn("#f0ebe4","#1a1a2e")} onClick={()=>setModal("login")}>Log in</button>
          <button style={st.btn("linear-gradient(135deg,#e8a598,#b85c50)","#fff")} onClick={()=>setModal("reg")}>Register Free</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{paddingTop:100,paddingBottom:56,textAlign:"center",background:"linear-gradient(170deg,#fff7f5,#f9f6f3)",padding:"100px 20px 56px"}}>
        <div style={{display:"inline-block",background:"#fde8e4",color:"#b85c50",fontSize:11,fontWeight:700,letterSpacing:".12em",padding:"5px 14px",borderRadius:20,marginBottom:16}}>✦ TRUSTED BY 5 LAKH+ FAMILIES</div>
        <h1 style={{fontFamily:"Georgia,serif",fontSize:"clamp(34px,5vw,56px)",lineHeight:1.15,margin:"0 0 14px"}}>Find Your Perfect<br/><span style={{color:"#b85c50",fontStyle:"italic"}}>Life Partner</span></h1>
        <p style={{fontSize:16,color:"#7a7890",marginBottom:28,maxWidth:420,margin:"0 auto 28px",lineHeight:1.7}}>Connecting verified, compatible profiles across Tamil Nadu and India.</p>
        <div style={{display:"flex",gap:32,justifyContent:"center",marginBottom:28}}>
          {[["5L+","Members"],["1.2L+","Marriages"],["3.5L+","Verified"]].map(([n,l])=>(
            <div key={l}><div style={{fontFamily:"Georgia,serif",fontSize:26,color:"#b85c50"}}>{n}</div><div style={{fontSize:12,color:"#a09898"}}>{l}</div></div>
          ))}
        </div>
        <button style={{...st.btn("linear-gradient(135deg,#e8a598,#b85c50)","#fff"),padding:"13px 36px",fontSize:15}} onClick={()=>setModal("reg")}>Begin Your Journey →</button>
      </section>

      {/* PROFILES */}
      <section style={{padding:"48px 0"}}>
        <div style={{textAlign:"center",marginBottom:24}}>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:28,marginBottom:14}}>Featured Profiles</h2>
          <div style={{display:"flex",gap:7,justifyContent:"center"}}>
            {[["all","All"],["f","🌸 Brides"],["m","👔 Grooms"]].map(([v,l])=>(
              <button key={v} onClick={()=>setTab(v)} style={{...st.btn(tab===v?"#1a1a2e":"#fff",tab===v?"#fff":"#6b6a7e"),border:`1.5px solid ${tab===v?"#1a1a2e":"#e4ddd6"}`,padding:"7px 18px",borderRadius:30}}>{l}</button>
            ))}
          </div>
        </div>
        <div style={st.grid}>
          {list.map(p=>(
            <div key={p.id} className="c" style={st.card} onClick={()=>setSel(p)}>
              <div style={{position:"relative",height:190}}>
                <img src={p.photo} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(20,18,36,.78),transparent 55%)"}}/>
                {p.verified&&<span style={{position:"absolute",top:10,left:10,background:"#e8f5ee",color:"#2a9960",fontSize:10,fontWeight:700,padding:"3px 8px",borderRadius:20}}>✓ Verified</span>}
                <button onClick={e=>{e.stopPropagation();setLiked(l=>l.includes(p.id)?l.filter(x=>x!==p.id):[...l,p.id]);notify(liked.includes(p.id)?"Removed":"Saved 💖");}} style={{position:"absolute",top:8,right:8,background:"rgba(255,255,255,.9)",border:"none",borderRadius:"50%",width:32,height:32,cursor:"pointer",fontSize:14}}>{liked.includes(p.id)?"❤️":"🤍"}</button>
                <div style={{position:"absolute",bottom:10,left:12}}>
                  <div style={{color:"#fff",fontFamily:"Georgia,serif",fontSize:17}}>{p.name}</div>
                  <div style={{color:"rgba(255,255,255,.65)",fontSize:12}}>{p.age} yrs · {p.city}</div>
                </div>
              </div>
              <div style={{padding:"13px 14px 15px"}}>
                <div style={{fontSize:13,color:"#1a1a2e",fontWeight:500,marginBottom:8}}>💼 {p.job}</div>
                <div style={{marginBottom:11}}>{p.tags.map(t=><span key={t} style={st.pill}>{t}</span>)}</div>
                <button style={{...st.btn("linear-gradient(135deg,#e8a598,#b85c50)","#fff"),width:"100%",padding:"9px",borderRadius:9}}>View Profile</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{padding:"48px 5%",background:"#fff",textAlign:"center"}}>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:28,marginBottom:28}}>How It Works</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:14,maxWidth:800,margin:"0 auto"}}>
          {[["📝","Register","Create your free profile in minutes"],["🔍","Get Matches","AI finds your best-fit profiles"],["💬","Connect","Chat with your matches"],["💍","Celebrate","Begin your journey together"]].map(([ic,t,d])=>(
            <div key={t} style={{padding:"22px 14px",borderRadius:14,border:"1.5px solid #ede8e2",background:"#f9f6f3"}}>
              <div style={{fontSize:28,marginBottom:8}}>{ic}</div>
              <div style={{fontFamily:"Georgia,serif",fontSize:16,marginBottom:5}}>{t}</div>
              <div style={{fontSize:13,color:"#a09898",lineHeight:1.6}}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PLANS */}
      <section style={{padding:"48px 5%",textAlign:"center"}}>
        <h2 style={{fontFamily:"Georgia,serif",fontSize:28,marginBottom:6}}>Choose Your Plan</h2>
        <p style={{color:"#a09898",marginBottom:32,fontSize:15}}>Start free, upgrade when ready</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16,maxWidth:820,margin:"0 auto"}}>
          {[{n:"Free",p:"₹0",per:"Forever",dark:false,feats:["Create Profile","5 Views","Basic Search"]},{n:"Gold",p:"₹2,499",per:"3 Months",dark:true,feats:["Unlimited Views","50 Contacts","Horoscope Match","WhatsApp Support"]},{n:"Platinum",p:"₹4,999",per:"6 Months",dark:false,feats:["All Gold Features","Dedicated Manager","Unlimited Contacts","Video Calls"]}].map(pl=>(
            <div key={pl.n} style={{background:pl.dark?"#1a1a2e":"#fff",borderRadius:16,padding:24,border:pl.dark?"none":"1.5px solid #ede8e2",transform:pl.dark?"scale(1.04)":"none",boxShadow:pl.dark?"0 12px 40px rgba(0,0,0,.18)":"none"}}>
              <div style={{fontFamily:"Georgia,serif",fontSize:20,color:pl.dark?"#fff":"#1a1a2e",marginBottom:4}}>{pl.n}</div>
              <div style={{fontSize:28,fontWeight:700,color:pl.dark?"#e8a598":"#b85c50"}}>{pl.p}</div>
              <div style={{fontSize:12,color:pl.dark?"rgba(255,255,255,.4)":"#a09898",marginBottom:18}}>/ {pl.per}</div>
              {pl.feats.map(ff=><div key={ff} style={{fontSize:13,color:pl.dark?"rgba(255,255,255,.7)":"#6b6a7e",padding:"5px 0",borderBottom:`1px solid ${pl.dark?"rgba(255,255,255,.07)":"#ede8e2"}`,textAlign:"left"}}>✓ {ff}</div>)}
              <button style={{...st.btn(pl.dark?"linear-gradient(135deg,#e8a598,#b85c50)":"#1a1a2e","#fff"),width:"100%",marginTop:18,padding:"11px",borderRadius:9}} onClick={()=>setModal("reg")}>{pl.p==="₹0"?"Get Started":"Choose "+pl.n}</button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:"#1a1a2e",color:"rgba(255,255,255,.45)",padding:"24px 5%",textAlign:"center",fontSize:13}}>
        © 2025 Global Varan · Made with 💍 in Tamil Nadu &nbsp;|&nbsp; <span style={{color:"#e8a598",cursor:"pointer"}}>Privacy</span> · <span style={{color:"#e8a598",cursor:"pointer"}}>Terms</span> · <span style={{color:"#e8a598",cursor:"pointer"}}>Contact</span>
      </footer>

      {/* PROFILE MODAL */}
      {sel&&<div style={st.overlay} onClick={()=>setSel(null)}>
        <div style={st.modal} onClick={e=>e.stopPropagation()}>
          <img src={sel.photo} alt="" style={{width:"100%",height:180,objectFit:"cover",borderRadius:12,marginBottom:14}}/>
          <div style={{fontFamily:"Georgia,serif",fontSize:22,marginBottom:3}}>{sel.name}</div>
          <div style={{color:"#a09898",fontSize:13,marginBottom:12}}>{sel.age} yrs · {sel.city} · {sel.job}</div>
          <div style={{marginBottom:16}}>{sel.tags.map(t=><span key={t} style={st.pill}>{t}</span>)}</div>
          <div style={{display:"flex",gap:9}}>
            <button style={{...st.btn("linear-gradient(135deg,#e8a598,#b85c50)","#fff"),flex:1,padding:"11px",borderRadius:9}} onClick={()=>{setSel(null);notify("Interest sent to "+sel.name+"! 💌");}}>Send Interest 💌</button>
            <button style={{...st.btn("#f0ebe4","#1a1a2e"),padding:"11px 18px",borderRadius:9}} onClick={()=>setSel(null)}>Close</button>
          </div>
        </div>
      </div>}

      {/* AUTH MODAL */}
      {modal&&<div style={st.overlay} onClick={()=>setModal(null)}>
        <div style={st.modal} onClick={e=>e.stopPropagation()}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
            <div style={{fontFamily:"Georgia,serif",fontSize:22}}>{modal==="login"?"Welcome Back":"Create Account"}</div>
            <button style={{background:"#f0ebe4",border:"none",borderRadius:"50%",width:32,height:32,cursor:"pointer",fontSize:16}} onClick={()=>setModal(null)}>✕</button>
          </div>
          {modal==="reg"&&<div style={{marginBottom:13}}>
            <div style={{fontSize:11,fontWeight:700,color:"#a09898",letterSpacing:".1em",marginBottom:6}}>I AM A</div>
            <div style={{display:"flex",gap:8}}>{["f","m"].map(g=><button key={g} onClick={()=>setF(x=>({...x,gender:g}))} style={{...st.btn(f.gender===g?"linear-gradient(135deg,#e8a598,#b85c50)":"#f0ebe4",f.gender===g?"#fff":"#6b6a7e"),flex:1,padding:"9px",borderRadius:9}}>{g==="f"?"🌸 Bride":"👔 Groom"}</button>)}</div>
          </div>}
          {(modal==="reg"?[["Name","name","text"],["Email","email","email"],["Phone","phone","tel"]]:[ ["Email","email","email"]]).map(([l,k,t])=>(
            <div key={k} style={{marginBottom:12}}>
              <div style={{fontSize:11,fontWeight:700,color:"#a09898",letterSpacing:".1em",marginBottom:4}}>{l.toUpperCase()}</div>
              <input style={st.inp} type={t} placeholder={l} value={f[k]||""} onChange={e=>setF(x=>({...x,[k]:e.target.value}))}/>
            </div>
          ))}
          <div style={{marginBottom:18}}>
            <div style={{fontSize:11,fontWeight:700,color:"#a09898",letterSpacing:".1em",marginBottom:4}}>PASSWORD</div>
            <input style={st.inp} type="password" placeholder="Password" value={f.password} onChange={e=>setF(x=>({...x,password:e.target.value}))}/>
          </div>
          <button style={{...st.btn("linear-gradient(135deg,#e8a598,#b85c50)","#fff"),width:"100%",padding:"12px",borderRadius:10,fontSize:14,marginBottom:12}} onClick={()=>{setModal(null);notify(modal==="login"?"Logged in! 👋":"Welcome to Global Varan! 🎉");}}>
            {modal==="login"?"Log In":"Create Account"}
          </button>
          <p style={{textAlign:"center",fontSize:13,color:"#a09898"}}>
            {modal==="login"?"No account? ":"Have an account? "}
            <span style={{color:"#b85c50",cursor:"pointer",fontWeight:600}} onClick={()=>setModal(modal==="login"?"reg":"login")}>{modal==="login"?"Register free":"Log in"}</span>
          </p>
        </div>
      </div>}
    </div>
  );
}
