<template>
  <div class="container">
    <br/>
    <vs-tabs color="black" alignment="fixed">

      <vs-tab :label="nivel.nombre" @click="colorx = '#8B0000'" v-for="(nivel, index1) in preguntas" :key="index1">
        <vs-collapse v-for="(subnivel, index2) in nivel.subnivel" :key="index2">
          <vs-collapse-item icon-arrow="label">
            <div slot="header">{{subnivel.nombre}}</div>
            <vs-row vs-justify="center">
              <vs-button type="gradient" icon="contactless" class="center"></vs-button>
            </vs-row>
            <br />
            <vs-row vs-justify="center">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="2" v-for="(pregunta, index3) in subnivel.preguntas" :key="index3">
                <vs-card actionable class="cardx">
                  <div slot="header">
                    <h5>{{pregunta.nombre}}</h5>
                  </div>
                  <template v-if="pregunta.tipo_campo == 1">
                    <div slot="media" v-if="pregunta.foto">
                      <img :src="pregunta.foto" />
                    </div>
                  </template>
                  <template v-else>
                     <vs-input :success="true" success-text="The text is valid" placeholder="Text" />
                  </template>
                  <div slot="footer"></div>
                </vs-card>
              </vs-col>
            </vs-row>
          </vs-collapse-item>
        </vs-collapse>
      </vs-tab>

      <!--<vs-tab label="Sílabas" @click="colorx = '#8B0000'"></vs-tab>
      <vs-tab label="Oraciones" @click="colorx = '#8B0000'">
        <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 1</div>
            <vs-row vs-justify="center">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vs-card actionable class="cardx">
                  <div slot="header">
                    <h3>Separa las oraciones</h3>
                  </div>
                  <div>
                    <span>
                      <center>Miperroladramucho</center>
                    </span>
                  </div>
                </vs-card>
                <vs-row vs-justify="center">
                  <vs-input :success="true" success-text="The text is valid" placeholder="Text" />
                </vs-row>
              </vs-col>
            </vs-row>
          </vs-collapse-item>
        </vs-collapse>

        <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 2</div>
            <vs-row vs-justify="center">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vs-card actionable class="cardx">
                  <div slot="header">
                    <h3>Separa las oraciones</h3>
                  </div>
                  <div>
                    <span>
                      <center>Borjatienepecas</center>
                    </span>
                  </div>
                </vs-card>
                <vs-row vs-justify="center">
                  <vs-input :success="true" success-text="The text is valid" placeholder="Text" />
                </vs-row>
              </vs-col>
            </vs-row>
          </vs-collapse-item>
        </vs-collapse>

        <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 3</div>
            <vs-row vs-justify="center">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vs-card actionable class="cardx">
                  <div slot="header">
                    <h3>Separa las oraciones</h3>
                  </div>
                  <div>
                    <span>
                      <center>Lavacatienecuernos</center>
                    </span>
                  </div>
                </vs-card>
                <vs-row vs-justify="center">
                  <vs-input :success="true" success-text="The text is valid" placeholder="Text" />
                </vs-row>
              </vs-col>
            </vs-row>
          </vs-collapse-item>
        </vs-collapse>

        <vs-collapse>
          <vs-collapse-item icon-arrow="label">
            <div slot="header">Ejercicio 4</div>
            <vs-row vs-justify="center">
              <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
                <vs-card actionable class="cardx">
                  <div slot="header">
                    <h3>Separa las oraciones</h3>
                  </div>
                  <div>
                    <span>
                      <center>Misombreroesdecopa</center>
                    </span>
                  </div>
                </vs-card>
                <vs-row vs-justify="center">
                  <vs-input :success="true" success-text="The text is valid" placeholder="Text" />
                </vs-row>
              </vs-col>
            </vs-row>
          </vs-collapse-item>
        </vs-collapse>
      </vs-tab>-->
    </vs-tabs>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return {
      preguntas:[
        {
          nombre:"nivel 1",
          foto:"",
          audio:"a.vwm",
          subnivel:[
            {
              nombre:"subnivel 1",
              foto:"",
              audio:"",
              preguntas:[
                {
                  nombre:"uno",
                  descripcion:"uno",
                  foto:"",
                  audio:"",
                },
                {
                  nombre:"dos",
                  descripcion:"dos",
                  foto:"",
                  audio:"",
                }
              ]
            },
            {
              nombre:"subnivel 2",
              foto:"",
              audio:"",
              preguntas:[
                {
                  nombre:"uno",
                  descripcion:"uno",
                  foto:"",
                  audio:"",
                },
                {
                  nombre:"dos",
                  descripcion:"dos",
                  foto:"",
                  audio:"",
                }
              ]
            }
          ]
        },
        {
          nombre:"nivel 2",
          descripcion:"nivel 2",
          subnivel:[
            {
              nombre:"subnivel 3",
              descripcion:"subnivel 3",
              foto:null,
              audio:null,
              preguntas:[
                {
                  nombre:"uno",
                  descripcion:"uno",
                  foto:"imagenes/b.png",
                  tipo_campo:1,
                  audio:null,
                },
                {
                  nombre:"dos",
                  descripcion:"dos",
                  foto:"imagenes/b.png",
                  tipo_campo:2,
                  audio:null,
                }
              ]
            },
            {
              nombre:"subnivel 4",
              foto:null,
              audio:null,
              preguntas:[
                {
                  nombre:"uno",
                  descripcion:"uno",
                  foto:null,
                  audio:null,
                },
                {
                  nombre:"dos",
                  descripcion:"dos",
                  foto:null,
                  audio:null,
                }
              ]
            }
          ]
        },
      ],
    }
  },
  methods: {
    llamarpreguntas(){
      axios.get("/api/llamarpreguntas").then( ({data}) =>{
        this.preguntas = data;
      }).catch( error =>  {
        console.log(error);
      });
    }
  },
  mounted(){
    //this.llamarpreguntas();
  }
};
</script>