import React from 'react';
import { Colors } from './components/colors';
import { Typography } from './components/typography';
import { Shadows } from './components/shadows';
import { ApplicantInformation } from './components/applicant-information';
import { Table } from './components/table';
import { CC } from '../../components/сс/cc';
import { PageTitle } from '../mega-layout/components/page-title';
import { PrimaryLayout } from '../mega-layout/primary-layout';

export const SamplesPage = () => {
  const layoutPropsMap = {
    subHeader: ['title', 'xxx']
  }
  const props = {layout: PrimaryLayout, layoutPropsMap };
  // const props = {}

  return (
    <CC {...props}>
      <CC.Part id={"title"}><PageTitle title={"Samples"}/></CC.Part>
      <CC.Part id={"xxx"}>Some toolbar or button.</CC.Part>
      <CC.Part id={"table"}><Table /></CC.Part>
      <CC.Part id={"applicantInformation"}><ApplicantInformation /></CC.Part>
      <CC.Part id={"colors"}><Colors /></CC.Part>
      <CC.Part id={"typography"}><Typography /></CC.Part>
      <CC.Part id={"shadows"}><Shadows /></CC.Part>
    </CC>
  )
}

