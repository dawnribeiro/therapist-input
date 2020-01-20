import React, { Component } from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'
const csv = require('csvtojson')

class Import extends Component {
  state = {
    files: [],
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    this.setState({
      files: acceptedFiles,
    })

    acceptedFiles.forEach(file => {
      const reader = new FileReader()

      reader.onload = () => {
        const fileAsBinaryString = reader.result

        csv({
          noheader: true,
          output: 'json',
        })
          .fromString(fileAsBinaryString)
          .then(csvRows => {
            const toJson = []
            console.log({ csvRows })

            const thangs = csvRows
              .filter(f => f.field2)
              .map(row => {
                return {
                  firstName: row.field2,
                  lastName: row.field1,
                  workPhone: row.field3,
                  homePhone: row.field4,
                  street: row.field5,
                  city: row.field6,
                  state: row.field7,
                  zip: row.field8,
                  email: row.field9,
                  p101: row.field10,
                  s1: row.field11,
                  s2: row.field12,
                  s3: row.field13,
                  s4: row.field14,
                  p202: row.field15,
                  n1: row.field16,
                  n2: row.field17,
                  n3: row.field18,
                  n4: row.field19,
                  bach: row.field20,
                  certified: row.field21,
                  seminarsTaken: row.field22,
                  website: row.field23,
                }
              })
            console.log({ thangs })
            // post all the whole
            // set thangs into state
            // display files uploaded
            thangs.forEach(therapist => {
              axios
                .post(
                  'https://neurosomatic-therapist-api.herokuapp.com/api/Therapist',
                  therapist
                )
                .then(resp => {
                  console.log('new therapist added', resp.data)
                })
            })
          })
      }

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')

      reader.readAsBinaryString(file)
    })
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)} multiple={false}>
            <p>
              Try dropping some files here, or click to select files to upload.
            </p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {this.state.files.map(f => (
              <li key={f.name}>
                {f.name} - {f.size} bytes
              </li>
            ))}
          </ul>
        </aside>
      </section>
    )
  }
}

export default Import
