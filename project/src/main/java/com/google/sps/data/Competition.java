// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.data;

/**
 * Class representing each competition object
 */
public class Competition {

  /** The id of the competition entry in database */
  private long id;

  /** The name of the user who made the comment */
  private String competitionName;

  /** The name of the competition organiser */
  private String organiserName;

  /** The idap of the organiser */
  private String organiserIdap;

  /** The unformatted start date (milliseconds)*/
  private long startDate;

  /** The unformatted start date (milliseconds) */
  private long endDate;

  public Competition(long id, String competitionName, String organiserName, String organiserIdap, long startDate, long endDate) {
      this.id = id;
      this.competitionName = competitionName;
      this.organiserName = organiserName;
      this.organiserIdap = organiserIdap;
      this.startDate = startDate;
      this.endDate = endDate;
  }
}