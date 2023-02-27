export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q){return {data:{alphafold2_rave_on_1hzb_cold_shock_protein:{_path:"\u002Fnotebooks\u002Falphafold2_rave_on_1hzb_cold_shock_protein",_dir:"notebooks",_draft:n,_partial:n,_locale:"en",_empty:n,title:"AlphaFold2-RAVE on 1HZB cold shock proein",description:"AlphaFold2-RAVE is an efficient protocol using the structural outputs from AlphaFold2 as initializations for AI augmented molecular dynamics. These simulations result in Boltzmann ranked ensembles.",excerpt:{type:q,children:[{type:a,tag:r,props:{id:s},children:[{type:b,value:t}]},{type:a,tag:g,props:{},children:[{type:b,value:u}]},{type:a,tag:g,props:{},children:[{type:b,value:v},{type:a,tag:w,props:{},children:[{type:b,value:k}]},{type:b,value:x}]},{type:a,tag:y,props:{},children:[{type:a,tag:z,props:{},children:[{type:a,tag:h,props:{},children:[{type:a,tag:e,props:{align:c},children:[{type:b,value:k}]},{type:a,tag:e,props:{align:i},children:[{type:b,value:A}]},{type:a,tag:e,props:{align:c},children:[{type:b,value:B}]},{type:a,tag:e,props:{align:c},children:[{type:b,value:C}]}]}]},{type:a,tag:D,props:{},children:[{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{align:c},children:[{type:b,value:E}]},{type:a,tag:d,props:{align:i},children:[{type:b,value:F}]},{type:a,tag:d,props:{align:c},children:[{type:b,value:G}]},{type:a,tag:d,props:{align:c},children:[{type:b,value:j}]}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{align:c},children:[{type:b,value:H}]},{type:a,tag:d,props:{align:i},children:[{type:b,value:I}]},{type:a,tag:d,props:{align:c},children:[{type:b,value:j}]},{type:a,tag:d,props:{align:c},children:[{type:b,value:j}]}]}]}]},{type:a,tag:J,props:{id:o},children:[{type:b,value:p}]},{type:a,tag:g,props:{},children:[{type:b,value:K},{type:a,tag:l,props:{},children:[{type:b,value:m}]},{type:b,value:L},{type:a,tag:l,props:{},children:[{type:b,value:m}]},{type:b,value:M}]}]},url:"https:\u002F\u002Fcolab.research.google.com\u002Fgithub\u002Ftiwarylab\u002Falphafold2rave\u002Fblob\u002Fmain\u002Ffullrunthrough_CSP.ipynb",git:"tiwarylab\u002Falphafold2rave",added:"2023-02-16",type:["colab"],image:c,category:"biology",license:"mit",tags:[N,"machine learning",O],used_software:[O,"openmm","plumed"],creator:[{name:"Bodhi P. Vani",twitter:f,github:f,orcid:c},{name:"Akashnathan Aranganathan",twitter:f,github:f,orcid:c},{name:"Dedi Wang",twitter:f,github:f,orcid:c},{name:"Pratyush Tiwary",twitter:P,github:P,orcid:c}],body:{type:q,children:[{type:a,tag:r,props:{id:s},children:[{type:b,value:t}]},{type:a,tag:g,props:{},children:[{type:b,value:u}]},{type:a,tag:g,props:{},children:[{type:b,value:v},{type:a,tag:w,props:{},children:[{type:b,value:k}]},{type:b,value:x}]},{type:a,tag:y,props:{},children:[{type:a,tag:z,props:{},children:[{type:a,tag:h,props:{},children:[{type:a,tag:e,props:{align:c},children:[{type:b,value:k}]},{type:a,tag:e,props:{align:i},children:[{type:b,value:A}]},{type:a,tag:e,props:{align:c},children:[{type:b,value:B}]},{type:a,tag:e,props:{align:c},children:[{type:b,value:C}]}]}]},{type:a,tag:D,props:{},children:[{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{align:c},children:[{type:b,value:E}]},{type:a,tag:d,props:{align:i},children:[{type:b,value:F}]},{type:a,tag:d,props:{align:c},children:[{type:b,value:G}]},{type:a,tag:d,props:{align:c},children:[{type:b,value:j}]}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{align:c},children:[{type:b,value:H}]},{type:a,tag:d,props:{align:i},children:[{type:b,value:I}]},{type:a,tag:d,props:{align:c},children:[{type:b,value:j}]},{type:a,tag:d,props:{align:c},children:[{type:b,value:j}]}]}]}]},{type:a,tag:J,props:{id:o},children:[{type:b,value:p}]},{type:a,tag:g,props:{},children:[{type:b,value:K},{type:a,tag:l,props:{},children:[{type:b,value:m}]},{type:b,value:L},{type:a,tag:l,props:{},children:[{type:b,value:m}]},{type:b,value:M}]}],toc:{title:f,searchDepth:Q,depth:Q,links:[{id:o,depth:2,text:p}]}},_type:"markdown",_id:"content:notebooks:alphafold2_rave_on_1hzb_cold_shock_protein.md",_source:"content",_file:"notebooks\u002Falphafold2_rave_on_1hzb_cold_shock_protein.md",_extension:N}},prerenderedAt:1677501430445}}("element","text",null,"td","th","","p","tr","center","✅","light_version","sup","*",false,"motivation","Motivation","root","h1","alphafold2-rave-v-10","AlphaFold2-RAVE v 1.0","This notebook aims to show how efficient our method is in predicting an effective RC (SPIB) from the amino acid sequence of a protein of interest(CSP), that can then be used in enhanced sampling to obtain Boltzmann ranked conformations.","We provide a ","code-inline"," option in our notebook to get a brief overview and the essence of our protocol.","table","thead","Time","MD simulation","SPIB","tbody","True","1  min","❌","False","~ 3 hrs","h2","This protocol is essentially a methodology that combines two schools of thought: structure prediction, and enhanced sampling to preserve thermodynamics. In this repository, we demonstrate one instance of such a methodology. For structure prediction, we use AlphaFold2, or more specifically ColabFold. We introduce stochasticity to the ColabFold algorithm by decreasing the MSA cluster size and generating structures with multiple random seeds",". For thermodynamics, we perform molecular dynamics simulations with metadynamics. To bias the simulations, we learn collective variables from the now-diverse set of structures using SPIB",".","md","alphafold","tiwarylab",3))