<template>
  <div class="container">
    <br />
    <vs-tabs color="black" alignment="fixed">
      <vs-tab
        :label="nivel.nombre"
        @click="colorx = '#8B0000'"
        v-for="(nivel, index1) in preguntas"
        :key="index1"
      >
        <vs-collapse v-for="(subnivel, index2) in nivel.subnivel" :key="index2">
          <vs-collapse-item icon-arrow="label">
            <div slot="header">{{subnivel.nombre}}</div>
            <vs-row vs-justify="center">
              <vs-button type="gradient" icon="contactless" class="center"></vs-button>
            </vs-row>
            <br />
            <vs-row vs-justify="center">
              <vs-col
                type="flex"
                vs-justify="center"
                vs-align="center"
                vs-w="2"
                v-for="(pregunta, index3) in subnivel.preguntas"
                :key="index3"
              >
                <vs-card  actionable class="cardx">
                  <div slot="header">
                    <h5>{{pregunta.nombre}}</h5>
                  </div>
                  <template v-if="pregunta.tipo_campo == 1">
                    <div slot="media" v-if="pregunta.foto">
                      <img :src="pregunta.foto" />
                    </div>
                  </template>
                  <template v-else>
                    <div slot="media" v-if="pregunta.foto">
                      <img :src="pregunta.foto" />
                    </div>
                  </template>
                  <template v-ifelse>
                    <vs-button color="primary" type="gradient" icon="contactless"></vs-button>
                    <div slot="media" v-if="pregunta.oraciones">
                      <center>{{pregunta.oraciones}}</center>
                      <br />
                      <vs-input
                        :success="true"
                        success-text="The text is valid"
                        placeholder="Put the text"
                      />
                    </div>
                  </template>
                  <div slot="footer"></div>
                </vs-card>
              </vs-col>
            </vs-row>
          </vs-collapse-item>
        </vs-collapse>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      preguntas: [
        {
          nombre: "nivel 1",
          descripcion: "letras",
          subnivel: [
            {
              nombre: "subnivel 1",
              descripcion: "subnivel 1",
              foto: null,
              audio: null,
              preguntas: [
                {
                  nombre: "uno",
                  descripcion: "uno",
                  foto: "imagenes/b.png",
                  tipo_campo: 1,
                  audio: null,
                },
                {
                  nombre: "dos",
                  descripcion: "dos",
                  foto: "imagenes/d.png",
                  tipo_campo: 2,
                  audio: null,
                },
              ],
            },
            {
              nombre: "subnivel 2",
              foto: null,
              audio: null,
              preguntas: [
                {
                  nombre: "dos",
                  descripcion: "dos",
                  foto: "imagenes/p.png",
                  tipo_campo: 2,
                  audio: null,
                },
                {
                  nombre: "dos",
                  descripcion: "dos",
                  foto: "imagenes/q.png",
                  tipo_campo: 2,
                  audio: null,
                },
              ],
            },
          ],
        },
        {
          nombre: "nivel 2",
          descripcion: "silabas",
          subnivel: [
            {
              nombre: "subnivel 1",
              descripcion: "subnivel 1",
              foto: null,
              audio: null,
              preguntas: [
                {
                  nombre: "uno",
                  descripcion: "uno",
                  foto: "",
                  tipo_campo: 1,
                  audio: null,
                },
                {
                  nombre: "dos",
                  descripcion: "dos",
                  foto: "",
                  tipo_campo: 2,
                  audio: null,
                },
              ],
            },
            {
              nombre: "subnivel 2",
              foto: null,
              audio: null,
              preguntas: [
                {
                  nombre: "uno",
                  descripcion: "uno",
                  foto: null,
                  audio: null,
                },
                {
                  nombre: "dos",
                  descripcion: "dos",
                  foto: null,
                  audio: null,
                },
              ],
            },
          ],
        },
        {
          nombre: "nivel 3",
          descripcion: "oraciones",
          subnivel: [
            {
              nombre: "subnivel 1",
              descripcion: "separar oraciones",
              preguntas: [
                {
                  nombre: "uno",
                  descripcion: "uno",
                  oraciones: "Miperroladramucho.",
                },
              ],
            },
            {
              nombre: "subnivel 2",

              preguntas: [
                {
                  nombre: "dos",
                  descripcion: "dos",
                  oraciones: "Borjatienepecas.",
                },
              ],
            },
            {
              nombre: "subnivel 3",
              preguntas: [
                {
                  nombre: "dos",
                  descripcion: "dos",
                  oraciones: "Lavacatienecuernos.",
                },
              ],
            },
            {
              nombre: "subnivel 4",
              preguntas: [
                {
                  nombre: "dos",
                  descripcion: "dos",
                  oraciones: "Misombreroesdecopa.",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    llamarpreguntas() {
      axios
        .get("/api/llamarpreguntas")
        .then(({ data }) => {
          this.preguntas = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    //this.llamarpreguntas();
  },
};
</script>